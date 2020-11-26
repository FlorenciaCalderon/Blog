function createContact(){
    const contact=document.getElementById("about");
    contact.innerHTML="Magic Truffles Delivery <br> +31203698524";
    contact.style.backgroundImage="url(library.jpg)";
    contact.style.fontFamily="Tango";
    contact.style.height="135vh";
}

export default createContact;