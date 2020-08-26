<template>
  <div id="lastfm" class="flex flex-wrap md:-mr-8">
    <div class="w-full md:w-7/12 md:pr-2">
      <h4 class="mb-2 mt-0 opacity-75">Recent Tracks</h4>
      <hr class="mt-2 mb-5" />
      <div id="lastFM-recent-tracks" class="mb-6 lg:mb-8 lg:h-640">
        <ul v-if="tracks && tracks.length">
          <li v-for="(track, index) of tracks.slice(0, 5)" :key="index">
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
              <a class="shadow-none" :href="track.url" target="_blank">{{track.name}}</a>
            </div>
            <div class="artist">{{track.artist["#text"]}}</div>
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
    <div class="w-full md:w-5/12 md:pl-4">
      <h4 class="mb-2 mt-0 text-color-mid">
        Top Artists
        <span class="ml-2 text-color-mild text-sm">Last 30 Days</span>
      </h4>
      <hr class="mt-2 mb-5" />
      <div id="lastFM-top-artists" class="mb-6 lg:mb-8 lg:h-640">
        <ul v-if="topartists && topartists.length">
          <li v-for="(artist, index) of topartists.slice(0, 5)" :key="index">
            <img
              v-bind:src="'https://tse2.mm.bing.net/th?q=%27+' + artist.name + '+%27%20artist+spotify.com&w=300&h=300&c=7&rs=1'"
              :alt="artist.name"
            />
            <div class="artist">
              <a class="shadow-none" :href="artist.url" target="_blank">{{artist.name}}</a>
            </div>
            <div class="play-count">{{artist.playcount}} plays</div>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex flex-wrap w-full mt-1">
      <a
        href="https://open.spotify.com/user/brodymaclean"
        target="_blank"
        class="fill-current mr-8 mb-2 flex items-center"
      >
        <svg
          height="24"
          preserveAspectRatio="xMinYMin"
          viewBox="-2 -2 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block mr-2 opacity-75"
        >
          <path
            d="m9.992 0c-5.518 0-9.992 4.474-9.992 9.992s4.474 9.992 9.992 9.992 9.992-4.474 9.992-9.992-4.474-9.992-9.992-9.992zm4.348 15.683c-.127.329-.355.512-.59.512a.518.518 0 0 1 -.344-.141c-1.796-1.588-3.87-1.843-5.294-1.778-1.578.073-2.735.544-2.747.549-.363.15-.74-.174-.839-.724-.1-.55.114-1.119.477-1.27.052-.022 1.297-.534 3.029-.62a8.939 8.939 0 0 1 2.917.32 8.09 8.09 0 0 1 3.146 1.737c.326.289.436.922.245 1.415zm1.27-3.063c-.15.329-.42.512-.699.512a.677.677 0 0 1 -.407-.141c-2.127-1.588-4.584-1.843-6.271-1.778-1.87.073-3.24.544-3.253.549-.431.15-.876-.174-.995-.724-.118-.55.135-1.119.566-1.27.061-.022 1.536-.534 3.587-.62 1.208-.051 2.37.057 3.456.32 1.374.333 2.628.917 3.726 1.737.386.288.516.922.29 1.415zm.782-2.996a.958.958 0 0 1 -.5-.142c-5.057-3.078-11.616-1.248-11.682-1.23-.528.153-1.075-.17-1.22-.721-.146-.551.165-1.12.693-1.272.076-.022 1.885-.534 4.4-.62a18.63 18.63 0 0 1 4.24.32c1.686.333 3.223.917 4.57 1.738.474.288.633.921.357 1.414a.985.985 0 0 1 -.858.513z"
          />
        </svg>
        <span>Follow on Spotify</span>
      </a>

      <a
        href="https://soundcloud.com/brodymaclean"
        target="_blank"
        class="fill-current flex items-center mb-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-2 -7.5 24 24"
          width="24"
          height="24"
          preserveAspectRatio="xMinYMin"
          class="inline-block mr-2 opacity-75"
        >
          <path
            d="M19.982 6.362c-.08-1.218-1.032-2.196-2.194-2.255a2.22 2.22 0 0 0-1.222.292C16.518 1.974 14.632.023 12.311.023c-.615 0-1.198.137-1.725.382a.332.332 0 0 0-.186.303v7.925c0 .183.142.332.316.332h6.957c1.333 0 2.402-1.183 2.31-2.603zM9.785.536a.326.326 0 0 0-.318.334v7.752c0 .184.142.334.318.334.175 0 .318-.15.318-.334V.87a.326.326 0 0 0-.318-.334zM8.733 1.36a.326.326 0 0 0-.318.334v6.928c0 .184.143.334.318.334.176 0 .318-.15.318-.334V1.694a.326.326 0 0 0-.318-.334zM7.681 1.736a.326.326 0 0 0-.318.334v6.552c0 .184.143.334.318.334.176 0 .318-.15.318-.334V2.07a.326.326 0 0 0-.318-.334zM6.63 1.235a.326.326 0 0 0-.319.334v7.053c0 .184.143.334.318.334.176 0 .318-.15.318-.334V1.57a.326.326 0 0 0-.318-.334zM5.577 1.569a.326.326 0 0 0-.318.334v6.72c0 .183.143.333.318.333.176 0 .318-.15.318-.334v-6.72a.326.326 0 0 0-.318-.333zM4.525 2.237a.326.326 0 0 0-.317.334v6.051c0 .184.142.334.317.334.176 0 .318-.15.318-.334V2.571a.326.326 0 0 0-.318-.334zM3.474 3.53a.326.326 0 0 0-.318.334v4.758c0 .184.142.334.318.334.175 0 .317-.15.317-.334V3.864a.326.326 0 0 0-.317-.333zM2.422 4.073a.326.326 0 0 0-.318.334v4.215c0 .184.142.334.318.334.175 0 .318-.15.318-.334V4.407a.326.326 0 0 0-.318-.334zM1.37 4.198a.326.326 0 0 0-.318.333v3.967c0 .184.142.333.318.333.175 0 .318-.15.318-.333V4.53a.326.326 0 0 0-.318-.333zM.318 5.07A.326.326 0 0 0 0 5.402v2.285c0 .185.142.334.318.334.175 0 .318-.15.318-.334V5.403a.326.326 0 0 0-.318-.334z"
          />
        </svg>
        <span>Follow on Soundcloud</span>
      </a>
    </div>
  </div>

  <!-- <ul v-if="tracks && tracks.length">
      <li v-for="(track, index) of tracks" :key="index">
        <p><strong>{{track.artist}}</strong></p>
        <p>{{track.name}}</p>
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li v-for="(error, index) of errors" :key="index">
        {{error.message}}
      </li>
  </ul>-->
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "LastFM",
  data() {
    return {
      tracks: [],
      errors: [],
      topartists: [],
      artistimage: [],
    };
  },

  // Fetches posts when the component is created.
  created() {
    axios
      .get(
        "https://ws.audioscrobbler.com/2.0/?callback=&method=user.getrecenttracks&format=json&limit=5&user=brodym&api_key=75176bb2349e51a475ea56ac979f7dc4&_=1535163214017"
      )
      .then((response) => {
        // JSON responses are automatically parsed.
        this.tracks = response.data.recenttracks.track;
        // console.log(this.tracks);
      })
      .catch((e) => {
        this.errors.push(e);
      });
    axios
      .get(
        "https://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=brodym&api_key=75176bb2349e51a475ea56ac979f7dc4&period=1month&limit=5&format=json"
      )
      .then((response) => {
        // JSON responses are automatically parsed.
        this.topartists = response.data.topartists.artist;
        // console.log(this.topartists);
      })
      .catch((e) => {
        this.errors.push(e);
      });
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" +
          "mallrat"
      )
      .then((response) => {
        // JSON responses are automatically parsed.
        this.artistimage = response.data;
        console.log(this.artistimage);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    relativeDate(date) {
      return moment.utc(date).local().fromNow();
    },
  },
};
</script>

<style>
#lastfm .track--now-playing:after {
  content: url(../assets/img/lastfm/track-nowplaying.gif);
  margin-left: 4px;
}

#lastfm ul li {
  @apply ml-0;
}
#lastfm ul li::before {
  @apply hidden;
}

#lastfm ul li {
  @apply mb-5 grid gap-x-4 p-0 leading-snug;
  grid-template-columns: 4.5rem auto;
  grid-template-rows: auto auto 1fr;
}

#lastfm ul li img {
  @apply col-span-1 row-span-3 col-start-1 row-start-1;
}

#lastFM-recent-tracks ul li div.track {
  @apply col-span-1 row-span-1 col-start-2 row-start-1 self-start pt-1 truncate;
}

#lastFM-recent-tracks ul li div.artist {
  @apply col-span-1 row-span-1 col-start-2 row-start-2 self-start truncate text-color-mid;
}

#lastFM-recent-tracks ul li div.date {
  @apply col-span-1 row-span-1 col-start-2 row-start-3 self-start text-sm text-color-mid pt-1;
}

#lastFM-top-artists ul li div.artist {
  @apply col-span-1 row-span-1 col-start-2 row-start-1 self-start pt-1 text-color-mid;
}

#lastFM-top-artists ul li div.play-count {
  @apply col-span-1 row-span-1 col-start-2 row-start-2 self-start pt-1 text-sm text-color-mid pt-1;
}
</style>
