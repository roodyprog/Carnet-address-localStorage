//import Form from "./form.class.js";
import AddContact from "./formComponent.js";
import ShowContact from "./componentPrintContact.js";



function afterDOMLoaded() {
    //new Form();
    const app = new Vue({
            el: '#app',
            components:{AddContact,ShowContact},
            data: {
                contacts:[],
            },
            methods:{
                loadContacts(){
                    //alimenter notre tableau Contacts avec les localStorage
                    if (window.localStorage.getItem("contacts") != null) {
                        this.contacts = JSON.parse(window.localStorage.getItem("contacts"));
                        //return this.contacts
                    }
                },
                saveContacts(){
                    window.localStorage.setItem("contacts", JSON.stringify(this.contacts));
                },
            },
            //CRÉATION DU HOOK BEFORE MOUNT
                beforeMount(){
                    //EXECUTER UNE DE NOS METHODES
                    this.loadContacts();
                },
    })
}
document.addEventListener("DOMContentLoaded", afterDOMLoaded);
