
function createHeader(id, text){
  let header = document.createElement("div");
  header.setAttribute("id", id);
  header.textContent = text;
  return header;
}

 function createTab1(id, text){
  let tab1 = document.createElement("button");
  tab1.setAttribute("id", id);
  tab1.textContent = text;
  return tab1;
}

function createTab2(id, text){
  let tab2 = document.createElement("button");
  tab2.setAttribute("id", id);
  tab2.textContent = text;
  return tab2;
}

function createTab3(id, text){
  let tab3 = document.createElement("button");
  tab3.setAttribute("id", id);
  tab3.textContent = text;
  return tab3;
}


function createTabs(id){
  let tabs = document.createElement("div");
  tabs.setAttribute("id", id);
  const tab1=createTab1("tab1", "Home");
  tabs.appendChild(tab1);
  const tab2=createTab2("tab2", "Menu");
  tabs.appendChild(tab2);
  const tab3=createTab3("tab3", "Contact");
  tabs.appendChild(tab3);
  return tabs;
 }


  function createAbout(id, text){
    let about = document.createElement("div");
    about.setAttribute("id", id);
    about.textContent = text;
    return about
  }

  function createSignature(id, text){
    let signature = document.createElement("div");
    signature.setAttribute("id", id);
    signature.textContent = text;
    return signature;
  
  }




function load() {
  let content = document.getElementById("content");
  const header=createHeader("header", "MAGICAL FOOD");
  content.appendChild(header);
  const tabs=createTabs("tabs");
  content.appendChild(tabs);
  const about=createAbout("about","");
  content.appendChild(about);
  const signature=createSignature("signature","This page was made with love");
  content.appendChild(signature);
}










export default load ;
