<template>
  <div v-if="tracks && tracks.length">
    <div v-for="(track, index) of tracks.slice(0, 1)" :key="index">
      <div v-if="track['@attr'] && track['@attr'].nowplaying">
        <div id="lastFM-latest" class="inline-flex flex-wrap bg-color-dim rounded-md p-0">
          <ul class="m-2">
            <li :key="index">
              <img
                src="../assets/img/lastfm/track-placeholder.svg"
                :alt="track.name"
                v-if="track.image[3]['#text'] === 'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png'"
              />
              <img
                :src="track.image[3]['#text']"
                :alt="track.name"
                v-else-if="track.image[3] && track.image[3]['#text']"
              />
              <img src="../assets/img/lastfm/track-placeholder.svg" :alt="track.name" v-else />
              <div class="track">
                <a class="shadow-none mr-2" :href="track.url" target="_blank">{{track.name}}</a>
                <span class="artist">{{track.artist["#text"]}}</span>
              </div>
              <div
                class="date track--now-playing"
                v-if="track['@attr'] && track['@attr'].nowplaying"
              >Now Playing</div>
              <div
                class="date timeago"
                v-else
                :title="track.date['#text']"
              >{{relativeDate(track.date["#text"], "DD MMM YYYY, HH:mm") }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "latesttrack",
  data() {
    return {
      tracks: [],
      errors: [],
    };
  },

  // Fetches posts when the component is created.
  created() {
    this.interval = setInterval(() => {
      axios
        .get(
          "https://ws.audioscrobbler.com/2.0/?callback=&method=user.getrecenttracks&format=json&limit=1&user=brodym&api_key=75176bb2349e51a475ea56ac979f7dc4&_=1535163214017"
        )
        .then((response) => {
          // JSON responses are automatically parsed.
          this.tracks = response.data.recenttracks.track;
          console.log(this.tracks);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    }, 100);
  },
  methods: {
    relativeDate(date) {
      return moment.utc(date).local().fromNow();
    },
  },
};
</script>

<style>
#lastFM-latest .track--now-playing:after {
  content: url(../assets/img/lastfm/track-nowplaying.gif);
  margin-left: 0.4rem;
}

#lastFM-latest {
  @apply inline-flex;
}

#lastFM-latest ul li {
  @apply ml-0;
}
#lastFM-latest ul li::before {
  @apply hidden;
}

#lastFM-latest ul li {
  @apply grid gap-x-3 p-0 leading-snug;
  grid-template-columns: 2.7rem auto;
  grid-template-rows: auto 1fr;
}

#lastFM-latest ul li img {
  @apply col-span-1 row-span-3 col-start-1 row-start-1;
  height: 2.7rem;
}

#lastFM-latest ul li div.track {
  @apply col-span-1 row-span-1 col-start-2 row-start-1 self-start truncate text-sm mt-1;
}

#lastFM-latest ul li div .artist {
  @apply text-color-mid mr-3;
}

#lastFM-latest ul li div.date {
  @apply col-span-1 row-span-1 col-start-2 row-start-2 self-start text-xs text-color-mid;
}
</style>
