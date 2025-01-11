let links = ["https://www.youtube.com/embed/IDwj5XZCJrQ?si=ZWWJ2BpNmgkvQ_UE",
"https://www.youtube.com/embed/4GpEbLOavVA?si=avC_OY-jBnKUjpsg",
"https://www.youtube.com/embed/Sxxw3qtb3_g?si=rg-GMct9asV-hb_M"];

let switchTabs = (index) => {
    index = index - 1; // Adjust index to match the array's 0-based indexing
    const tabDisplays = document.getElementsByClassName("tab-display");
    
    if (tabDisplays.length > 0) {
      const tabDisplay = tabDisplays[0]; // Access the first element with the class "tab-display"
      if(index >= 0 && index < links.length) {
        tabDisplay.innerHTML = `<iframe class="tab-frame" 
                                  src="${links[index]}" 
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