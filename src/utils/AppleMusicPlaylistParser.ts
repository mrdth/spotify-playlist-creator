import axios from 'axios';
import JSSoup from 'jssoup';
import htmlEntities from 'html-entities';

export default {

  parse: async function (url: string) {
    try {
      const playlistObj = {};

      const response = await axios.get(url);
      const htmlContent = response.data;
      const soup = new JSSoup(htmlContent);

      // scraping...
      const playlistHeaderBlock = soup.find('div', 'album-header-metadata');
      const playlistName = playlistHeaderBlock.find('h1').text.trim();
      const playlistUser = playlistHeaderBlock
        .find('div', 'product-creator')
        .text.trim();
      // console.log(playlistName, playlistUser);
      playlistObj.playlist = htmlEntities.decode(playlistName);
      playlistObj.user = htmlEntities.decode(playlistUser);

      const tracksInfo = soup.findAll('div', 'songs-list-row'); // finding all songs info
      playlistObj.songs = [];

      for (const track of tracksInfo) {
        let songName = track.find('div', 'songs-list-row__song-name').text;
        let singerNames = track.find('div', 'songs-list-row__by-line').text;
        singerNames = singerNames.replace(/\s{2,10}/g, ''); // remove spaces
        songName = songName.replace(/\?|<|>|\*|"|:|\||\/|\\/g, ''); // removing special characters which are not allowed in file name
        playlistObj.songs.push({
          name: htmlEntities.decode(songName),
          singer: htmlEntities.decode(singerNames)
        });
      }
      playlistObj.total = playlistObj.songs.length; // total songs count
      // console.log(playlistObj);
      return playlistObj;
    } catch {
      return 'Some Error';
    }
  }
};
