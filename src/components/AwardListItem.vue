<template>
    <li class="card">
        <div class="container">
            <label v-if="award.editMode" for="title">
                Title 
                <input name="title" type="text" v-bind:placeholder="award.title" v-model="newAwardTitle">
            </label>
            <b v-else>{{ award.title }}</b>
            <p v-if="award.editMode">
            <label for="detail">
                Detail 
                <input class="detail" name="detail" type="text" v-bind:placeholder="award.detail" v-model="newAwardDetail">
            </label>
            </p>
            <p v-else>{{ award.detail }}</p>
            <div v-if="award.editMode">
                <button v-on:click="updateAward">Save</button>
                <button v-on:click="exitEditMode">Undo</button>
            </div>
            <div v-else>
                <button v-on:click="enterEditMode">Edit</button>
                <button v-on:click="deleteAward">Delete</button>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    data() {
        return {
            newAwardTitle: "",
            newAwardDetail: ""
        };
    },
    props: {
        award: {
            type: Object,
            required: true
        }
    },
    methods: {
        exitEditMode: function() {
            this.award.editMode = false
        },
        enterEditMode: function() {
            this.newAwardTitle = this.award.title;
            this.newAwardDetail = this.award.detail;
            this.award.editMode = true;
        },
        deleteAward: function() {
            this.$emit("deleteAward", this.award.id);
        },
        updateAward: function() {
            this.award.title = this.newAwardTitle;
            this.award.detail = this.newAwardDetail;
            this.$emit("updateAward", this.award.id);
            this.award.editMode = false;
        }
    }
};
</script>

<style scoped>
button {
    background-color: transparent;
    border: 2px solid black;
}

.card {
    /* Add shadows to create the "card" effect */
    box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    max-width: 500px;
    margin: 10px;
    background-color: whitesmoke;
}

.detail {
    width: 80%;
    display: inline-block;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
    /* box-shadow: <offset-x>, <offset-y>, <blur-radius>, <spread-radius>, <color> */
    box-shadow: 8px 8px 12px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
}

/* Add some padding inside the card container */
.container {
    padding: 16px 16px;
}
</style>
