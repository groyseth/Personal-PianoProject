function testFunction(key) {
  console.log(key.key);
  if (key.key) {
    switch (key.key) {
      case "a":
        console.log("keypresseda");
        aLiteralKey()
        break;
      case "s":
        console.log("keypresseds");
        sLiteralKey();
        break;
      case "d":
        console.log("keypressedd");
        dLiteralKey();
        break;
      case "f":
        console.log("keypressedf");
        fLiteralKey();
        break;
      case "g":
        console.log("keypressedg");
        gLiteralKey();
        break;
      case "h":
        console.log("keypressedh");
        hLiteralKey();
        break;
      case "j":
        console.log("keypressedj");
        jLiteralKey();
        break;
      case "k":
        console.log("keypressedk");
        kLiteralKey();
        break;
      case "l":
        console.log("keypressedl");
        break;
      case ";":
        console.log("keypressed;");
        break;
      case "w":
        console.log("keypressedw");
        wLiteralKey();
        break;
      case "e":
        console.log("keypressedw");
        eLiteralKey();
        break;
      case "t":
        console.log("keypressedw");
        tLiteralKey();
        break;
      case "y":
        console.log("keypressedw");
        yLiteralKey();
        break;
      case "u":
        console.log("keypressedw");
        uLiteralKey();
        break;
        case "o":
        console.log("keypressedw");
        oLiteralKey();
        break;

    }
  }
}
// switch (keys) {
//   case "a":
//     console.log("keypresseda");
//     break;
//     case "s":
//       console.log("keypresseds");
//       break;

// }
//use switch

var keys = document.getElementById("text_box").addEventListener("keypress", testFunction);

//homerow notes
const aLiteralKey = () => {
  let Key = new Audio('./assets/audio/ckey.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    
    Key.play();
  });
}
const sLiteralKey = () => {
  let Key = new Audio('./assets/audio/dkey.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}

const dLiteralKey = () => {
  let Key = new Audio('./assets/audio/ekey.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}

const fLiteralKey = () => {
  let Key = new Audio('./assets/audio/fkey.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}
const gLiteralKey = () => {
  let Key = new Audio('./assets/audio/gkey.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}
const hLiteralKey = () => {
  let Key = new Audio('./assets/audio/akey.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}
const jLiteralKey = () => {
  let Key = new Audio('./assets/audio/bkey.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}
const kLiteralKey = () => {
  let Key = new Audio('./assets/audio/highckey.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}

//sharp and flat notes
const wLiteralKey = () => {
  let Key = new Audio('./assets/audio/c-sharp-key.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}
const eLiteralKey = () => {
  let Key = new Audio('./assets/audio/d-sharp-key.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}
const tLiteralKey = () => {
  let Key = new Audio('./assets/audio/f-sharp-key.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}
const yLiteralKey = () => {
  let Key = new Audio('./assets/audio/g-sharp-key.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}
const uLiteralKey = () => {
  let Key = new Audio('./assets/audio/a-sharp-key.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}
const oLiteralKey = () => {
  let Key = new Audio('./assets/audio/c-flat-key.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}


//hard code the homerow and assign a sound
//each key with mp3
//more functions with the file names
//main keys are hard coded and using a switch method
//and having like alot more of the myAudioElement fucntions