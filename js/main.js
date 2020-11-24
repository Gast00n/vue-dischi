/**
 * 
 * Dischi Vue
 * 
 */

 const app = new Vue({
     el: '#app',
     data: {
         cds:[],
         genres: [],
         actualGenre: 'all'
     },
     created() {
         /**
          * Get all albums
          */
         axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then( result => {

                this.cds = result.data.response;
                this.cds.forEach( (cd)  => {
                    if (! this.genres.includes(cd.genre)) {
                        console.log(cd.genre);
                        this.genres.push(cd.genre);
                    }
          
                });
            })
            .catch( error => {
                console.log(error);
            });

        
     },
     methods: {
         filterGenre() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then( result => {
                let cdsList = result.data.response;

                if (this.actualGenre !== 'all') {
                    cdsList = cdsList.filter( cd => cd.genre === this.actualGenre );
                }
                this.cds = cdsList;
                                               
            })
            .catch( error => {
                console.log(error);
            });
         }
     }
 });


