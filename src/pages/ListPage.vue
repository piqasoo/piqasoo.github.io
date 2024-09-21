<template>
    <main class="container">
        <section class="list-header">
            <div class="filter-container">
                <ul class="filter-nav">
                    <li class="active">
                        <label class="flex" for="">რეგიონი <span class="filter-arrow"></span></label>
                        <form action="" class="filter-region">
                            <fieldset>
                                <h3>რეგიონის მიხედვით</h3>
                                <div>
                                    <div class="form-group">
                                        <input type="checkbox" name="region[]" id="1" value="1">
                                        <label for="1">qartli</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="region[]" id="1" value="1">
                                        <label for="1">qartli2</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="region[]" id="1" value="1">
                                        <label for="1">qartli3</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="region[]" id="1" value="1">
                                        <label for="1">qartli4</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="region[]" id="1" value="1">
                                        <label for="1">qartli5</label>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </li>
                    <li>
                        <label class="flex" for="">საფასო კატეგორია <span class="filter-arrow"></span></label>
                        <form action="">
                            <fieldset>

                            </fieldset>
                        </form>
                    </li>
                    <li>
                        <label class="flex"  for="">ფართობი <span class="filter-arrow"></span></label>
                        <form action="">
                            <fieldset>

                            </fieldset>
                        </form>
                    </li>
                    <li>
                        <label class="flex"  for="">საძინებლების რაოდენობა <span class="filter-arrow"></span></label>
                        <form action="">
                            <fieldset>

                            </fieldset>
                        </form>
                    </li>
                </ul>
            </div>
            <div class="list-actions flex">
                <button class="btn btn-primary mr-1"><span class="plus-icon-white"></span> ლისტინგის დამატება</button>
                <button class="btn btn-secondary"><span class="plus-icon-red"></span> აგენტის დამატება</button>
            </div>
        </section>
        <section class="list-container mt-2">
            <product/>
            <product/>
            <product/>
            <product/>
            <product/>
            <product/>
        </section>
    </main>
</template>
<script>
    import axios from 'axios';
    import Product from "./../components/Product.vue"
    import TOKEN from "./../const.js";

    export default{
        components: {Product},
        data(){
            return {
                products: [],
            }
        }, 
        mounted(){
            console.log(TOKEN);
            this.loadData();
        },
        methods: {
            loadData(){
                axios.get('https://api.real-estate-manager.redberryinternship.ge/api/real-estates', {
                    headers: {
                        Authorization: `Bearer ${TOKEN}`
                    }
                }).then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }
        }
    }
</script>
<style>
    .list-header {
        display: flex;
        justify-content: space-between;
    }
    .list-container {
        display: flex;
        flex-wrap: wrap;
        margin-left: -10px;
        margin-right: -10px;
    }
</style>