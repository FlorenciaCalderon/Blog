import load from './modules/loadmodule';
import createHome from './modules/loadhome';
import createMenu from './modules/loadmenu';
import createContact from './modules/loadcontact';

load();
createHome();

const menuButton=document.getElementById("tab2");
menuButton.addEventListener("click",createMenu);

const homeButton=document.getElementById("tab1");
homeButton.addEventListener("click",createHome);

const contactButton=document.getElementById("tab3");
contactButton.addEventListener("click", createContact);