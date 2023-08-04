// Zuck stories and stories data

var timestamp = function() {
    var timeIndex = 0;
    var shifts = [35, 60, 60 * 3, 60 * 60 * 2, 60 * 60 * 25, 60 * 60 * 24 * 4, 60 * 60 * 24 * 10];
  
    var now = new Date();
    var shift = shifts[timeIndex++] || 0;
    var date = new Date(now - shift * 1000);
  
    return date.getTime() / 1000;
  };
  
  
  // Stories data
  
  // Update your story below
  let stories = new Zuck("stories", {
    backNative: false,    // uses window history to enable back button on browsers/android
    previousTap: true,    // use 1/3 of the screen to navigate to previous item when tap the story
    skin: "snapgram",     // container class
    autoFullScreen: false,// enables fullscreen on mobile browsers
    avatars: true,        // shows user photo instead of last story item preview
    list: false,          // displays a timeline instead of carousel
    openEffect: true,     // enables effect when opening story
    cubeEffect: true,     // enables the 3d cube effect when sliding story
    backButton: true,     // adds a back button to close the story viewer
    /* IMP - turn this reactive: FALSE or leave it commented if not using any framework */
    // reactive: true,    // set true if you use frameworks like React to control the timeline 
    rtl: false,           // enable/disable RTL
    localStorage: true,   // set true to save "seen" position. Element must have a id to save properly.
    stories: [
  
      // First Way (create each story in this way with multiple items)
      Zuck.buildTimelineItem(
        // story id
        "user-1",
        
        // Story photo src
        "./Images/ahmad.jpeg",
        
        // Story name (or user name)
        "Ahmad Jajja",
  
        // Story link (leave empty "" for javascript based zuck)
        "",
        // Story time
        timestamp(),
        // Story items
        [
          // item [id, photo/video, length(sec), src, preview, link, linkText, time, seen(true/false)]
          ["user1-story1", "photo", 5, "./Images/poster2.jpg", "", '', false, false, timestamp()],
        
          
        ]
      ),
      
      // Story (First way)
      Zuck.buildTimelineItem(
        "user-2",
        "./Images/hammad.jpeg",
        "Hammad Khalil",
        "",
        timestamp(),
        [
          ["user2-story1", "photo", 5, "./Images/hammad.jpeg", "", '', false, false, timestamp()],
        ]
      ),
      
      // Story item (First way)
      Zuck.buildTimelineItem(
        "user-3",
        "./Images/Affaq.jpg",
        "Affaq Rajpoot",
        "",
        timestamp(),
        [
          ["user3-story1", "photo", 5, "./Images/ali.jpg", "", '', false, false, timestamp()],
        ]
      ),
  
      // Story item (First way)
      Zuck.buildTimelineItem(
        "user-4",
        "./Images/ali.jpg",
        "Ali Afzal ",
        "",
        timestamp(),
        [
          ["user4-story1", "photo", 5, "./Images/ali.jpg", "", '', false, false, timestamp()],
        ]
      ),
  
      // Story item (First way)
      Zuck.buildTimelineItem(
        "user-5",
        "./Images/clAA.jpg",
        "Awais Developer",
        "",
        timestamp(),
        [
          ["user5-story1", "photo", 5, "./Images/clAA.jpg", "", '', false, false, timestamp()],
        ]
      ),
  
      // Story item (First way)
      Zuck.buildTimelineItem(
        "user-6",
        "./Images/balooch.jpeg",
        "Mr Balooch",
        "",
        timestamp(),
        [
          ["user6-story1", "photo", 5, "./Images/poster2.jpg", "", '', false, false, timestamp()],
        ]
      ),
  
      // Second way (this way implements only single story with multiple sub-stories)
      {
        id: "user-7",               // story id
        photo: "./Images/hassan.jpeg",            // story photo (or user photo)
        name: "",             // story name (or user name)
        link: "",             // story link (useless on story generated by script)
        lastUpdated: "",      // last updated date in unix time format
        seen: false,          // set true if user has opened
  
        items: [              // array of items
          // Story item 
          {
            id: "user7-story1",       // item id
            type: "photo",      // photo or video
            length: 3,          // photo timeout or video length in seconds - uses 3 seconds timeout for images if not set
            src: "./Images/ahmad.jpeg",      // photo or video src
            preview: "",        // optional - item thumbnail to show in the story carousel instead of the story defined image
            link: "",           // a link to click on story
            linkText: "",       // link text
            time: "",           // optional a date to display with the story item. unix timestamp are converted to "time ago" format
            seen: false         // set true if current user was read,
          },
        ]
      },
    ]
  });