//import AddContact from "./formComponent.js";
// export du composant.        // Nom du composant
export default Vue.component('ShowContact', {
    // Le template HTML
    props:['repertoire'],
    template: `
        <div class="container">
            <table class="table table-striped table-dark">
             <thead>
                 <tr>
                     <th>Name</th>
                     <th>First name</th>
                     <th>Email</th>
                     <th>Phone</th>
                     <th>Delete</th>
                     <th>Add</th>
                 </tr>
             </thead>
             <tbody>
                 <tr v-for="(contact,key) in repertoire">
                     <td>{{contact.name}}</td>
                     <td>{{contact.firstname}}</td>
                     <td>{{contact.email}}</td>
                     <td>{{contact.phone}}</td>
                     <td><button type="button" class="btn btn-danger" @click="remove(key)">remove</button></td>
                     <td><button type="button"class="btn btn-primary" @click="add(key)">Add</button></td>
                 </tr>
             </tbody>
        </table>

        </div>
    `,

    // Dans un composant le data object ***DOIT*** être une fonction qui retourne un objet
    data() {
        return {

        };
    },

    methods: {
        remove(key){
            //console.log(this.repertoire[key])
            this.repertoire.splice(key,1);
            this.$emit('save')
            //console.log(key)
        }
    }
});





