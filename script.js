tabLinks = [
  { link: "https://www.youtube.com/embed/IDwj5XZCJrQ?si=ZWWJ2BpNmgkvQ_UE", title: "Title 1" },
  { link: "https://www.youtube.com/embed/4GpEbLOavVA?si=avC_OY-jBnKUjpsg", title: "Title 2" },
  { link: "https://www.youtube.com/embed/Sxxw3qtb3_g?si=rg-GMct9asV-hb_M", title: "Title 3" }
];

let switchTabs = (index) => {
    const tabDisplays = document.getElementsByClassName("tab-display");
    
    if (tabDisplays.length > 0) {
      const tabDisplay = tabDisplays[0]; // Access the first element with the class "tab-display"
      if(index >= 0 && index < tabLinks.length) {
        tabDisplay.innerHTML = `<iframe class="tab-frame" 
                                  src="${tabLinks[index].link}" 
                                  sandbox="allow-scripts allow-same-origin" 
                                  frameborder="0" 
                                  allow="autoplay; encrypted-media" 
                                  width="100%" 
                                  height="400"></iframe>`;
      } else {
        console.error("Index out of range.");
      }
    } else {
      console.error("No element with the class 'tab-display' found.");
    }
};

let addNewTab = () => {
    let l = prompt("Enter a link:");
    let t = prompt("Enter the title of tab:");
    if (l.length > 0 && t.length > 0) {
      tabLinks.push({ link: l, title: t });
      initializeTabs();
    } else {
      alert("Invalid Link or Title");
    }
}

const initializeTabs = () => {
  const tabList = document.getElementsByClassName("tab-list")[0];
  let strlst = "";
  
  for (let i = 0; i < tabLinks.length; i++) {
    strlst += `<li class="tab-href" onclick="switchTabs(${i})">${tabLinks[i].title}<span><button class="close-btn" onclick="closeTab(${i})">x</button></span></li>`;
  }

  strlst += `<button class="tab-btn" onclick="addNewTab()">+</button>`;

  
  tabList.innerHTML = strlst;

  // Default iframe in the start
  
  const tabDisplays = document.getElementsByClassName("tab-display"); // Access the collection
  if (tabDisplays.length !== 0 && tabLinks.length > 0) { // Ensure the collection is not empty
    tabDisplays[0].innerHTML = `<iframe class="tab-frame" 
      src="${tabLinks[0].link}" 
      sandbox="allow-scripts allow-same-origin" 
      frameborder="0" 
      allow="autoplay; encrypted-media" 
      width="100%" 
      height="400"></iframe>`;
  } else if (tabDisplays.length !== 0) {
    tabDisplays[0].innerHTML = ""; // Clear display if no tabs exist
  }
}

const closeTab = (index) => {
  tabLinks.splice(index, 1);
  initializeTabs();
  console.log(`tabLink Size = ${tabLinks.length}`)
}