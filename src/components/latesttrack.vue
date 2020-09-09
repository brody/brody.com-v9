<template>
  <div v-if="tracks && tracks.length">
    <div v-for="(track, index) of tracks.slice(0, 1)" :key="index">
      <div
        v-if="track.date !== undefined && relativeTime(track.date['#text'], 'DD MMM YYYY, HH:mm') > 0 || track['@attr'] && track['@attr'].nowplaying"
      >
        <div id="lastFM-latest" class="inline-flex flex-wrap bg-color-dim rounded-md p-0">
          <ul class="m-2">
            <li :key="index">
              <placeholder
                :alt="track.name"
                v-if="track.image[3]['#text'] === 'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png'"
              />
              <img
                :src="track.image[3]['#text']"
                :alt="track.name"
                v-else-if="track.image[3] && track.image[3]['#text']"
              />
              <placeholder :alt="track.name" v-else />
              <div class="track">
                <a class="shadow-none mr-2" :href="track.url" target="_blank">{{track.name}}</a>
                <span class="artist">{{track.artist["#text"]}}</span>
              </div>
              <div
                class="date track--now-playing flex flex-row align-bottom"
                v-if="track['@attr'] && track['@attr'].nowplaying"
              >
                Now Playing
                <equaliser
                  class="ml-2 h-2 w-2 rounded-none self-center fill-current text-color-mid"
                />
              </div>
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
import equaliser from "../assets/img/lastfm/track-nowplaying.svg";
import placeholder from "../assets/img/lastfm/track-placeholder.svg";

export default {
  name: "latesttrack",
  components: {
    equaliser,
    placeholder,
  },
  data() {
    return {
      tracks: [],
      errors: [],
    };
  },

  // Fetches posts when the component is created.
  created() {
    axios
      .get(
        "https://ws.audioscrobbler.com/2.0/?callback=&method=user.getrecenttracks&format=json&limit=1&user=brodym&api_key=75176bb2349e51a475ea56ac979f7dc4&_=1535163214017"
      )
      .then((response) => {
        // JSON responses are automatically parsed.
        this.tracks = response.data.recenttracks.track;
        // console.log(this.tracks);
      })
      .catch((e) => {
        this.errors.push(e);
      });

    this.interval = setInterval(() => {
      axios
        .get(
          "https://ws.audioscrobbler.com/2.0/?callback=&method=user.getrecenttracks&format=json&limit=1&user=brodym&api_key=75176bb2349e51a475ea56ac979f7dc4&_=1535163214017"
        )
        .then((response) => {
          // JSON responses are automatically parsed.
          this.tracks = response.data.recenttracks.track;
          // console.log(this.tracks);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    }, 30000);
  },
  methods: {
    relativeDate(date) {
      return moment.utc(date).local().fromNow();
    },

    relativeTime(date) {
      var created = moment.utc(date).local();
      var expires = created.clone().add(10, "minutes");

      var now = new Date();
      var dur = moment.duration({ from: now, to: expires });

      // console.log(dur.asMinutes());

      return dur.asMinutes();
    },
  },
};
</script>

<style>
/* #lastFM-latest .track--now-playing:after {
  content: url(../assets/img/lastfm/track-nowplaying.gif);
  margin-left: 0.4rem;
} */

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

#lastFM-latest ul li > img,
#lastFM-latest ul li > svg {
  @apply col-span-1 row-span-3 col-start-1 row-start-1 rounded;
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

#now-playing-bar {
  animation: now-playing-bar__ts 1300ms linear infinite normal forwards;
}
@keyframes now-playing-bar__ts {
  0% {
    transform: translate(1.5px, 16px) scale(1, 1.46961);
  }
  15.384615% {
    transform: translate(1.5px, 16px) scale(1, 2.746652);
  }
  30.769231% {
    transform: translate(1.5px, 16px) scale(1, 0.915976);
  }
  61.538462% {
    transform: translate(1.5px, 16px) scale(1, 3.666059);
  }
  100% {
    transform: translate(1.5px, 16px) scale(1, 0.690486);
  }
}
#bar-2_ts {
  animation: bar-2_ts__ts 1300ms linear infinite normal forwards;
}
@keyframes bar-2_ts__ts {
  0% {
    transform: translate(6.5px, 16px) scale(1, 1);
  }
  7.692308% {
    transform: translate(6.5px, 16px) scale(1, 0.849129);
  }
  30.769231% {
    transform: translate(6.5px, 16px) scale(1, 1.230878);
  }
  69.230769% {
    transform: translate(6.5px, 16px) scale(1, 0.307613);
  }
  76.923077% {
    transform: translate(6.5px, 16px) scale(1, 0.461842);
  }
  84.615385% {
    transform: translate(6.5px, 16px) scale(1, 0.307613);
  }
  100% {
    transform: translate(6.5px, 16px) scale(1, 0.769128);
  }
}
#bar-3_ts {
  animation: bar-3_ts__ts 1300ms linear infinite normal forwards;
}
@keyframes bar-3_ts__ts {
  0% {
    transform: translate(13px, 16px) scale(1, 1);
  }
  15.384615% {
    transform: translate(13px, 16px) scale(1, 0.502744);
  }
  46.153846% {
    transform: translate(13px, 16px) scale(1, 1.874795);
  }
  61.538462% {
    transform: translate(13px, 16px) scale(1, 1.127769);
  }
  76.923077% {
    transform: translate(13px, 16px) scale(1, 1.998726);
  }
  100% {
    transform: translate(13px, 16px) scale(1, 1.125008);
  }
}
</style>
