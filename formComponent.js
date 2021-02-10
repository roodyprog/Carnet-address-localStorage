
// export du composant.        // Nom du composant
export default Vue.component('AddContact', {

    // Le template HTML
    template: `
        <div class="container">
            <h1 >Validation de form en JS</h1>
            <h2 id="errors"></h2>
            <form @submit.prevent="addContact">
                <div class=boite>
                    <div class="form-group">
                        <label for="name" >Name</label>
                        <input type="text"   v-model="name" id="name" placeholder="Jean" />
                    </div>

                    <div class="form-group">
                        <label for="firstname" class="">First name</label>
                        <input type="text"   v-model="firstname" id="firstname" placeholder="Luc" />
                    </div>

                    <div class="form-group">
                        <label for="email"  >Email</label>
                        <input type="email" v-model="email"  id="email" placeholder="email" />
                    </div>

                    <div class="form-group">
                        <label for="phone"  >Phone</label>
                        <input type="text"  v-model="phone" id="phone" placeholder="06" />
                    </div>
                    <div><button type="submit" class="btn btn-primary">Ajouter</button></div>
                </div>
            </form>
        </div>
    `,

    // Dans un composant le data object ***DOIT*** être une fonction qui retourne un objet
    data() {
        return {
            name: '',
            firstname:'',
            email:'',
            phone:'',
        };
    },
    props:['repertoire'],
    methods: {
        addContact() {
            let contact = {
                name:this.name,
                firstname:this.firstname,
                email:this.email,
                phone:this.phone,

            };
            this.repertoire.push(contact);
            window.localStorage.setItem("contacts", JSON.stringify(this.repertoire));
            this.$emit("save");
        }

    }
});