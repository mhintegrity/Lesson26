<template>
    <div id="app">
        <h1>List of Awards</h1>
        <div class="card">
            <div class="container">
                <h4>
                    <b>New Award</b>
                </h4>
                <label for="title">
                    Title
                    <input
                        name="title"
                        type="text"
                        placeholder="Title"
                        v-model="newAwardTitle"
                    >
                </label>
                <p>
                    <label for="detail">
                        Detail
                        <input
                            class="detail"
                            name="detail"
                            type="text"
                            placeholder="Detail"
                            v-model="newAwardDetail"
                        >
                    </label>
                </p>
                <button v-on:click="addAward">Add</button>
            </div>
        </div>
        <ul>
            <award-card
                v-for="award in awards"
                v-bind:key="award.id"
                v-bind:award="award"
                v-on:deleteAward="deleteAward(award)"
                v-on:updateAward="updateAward(award)"
            />
        </ul>
    </div>
</template>

<script>
// @ is an alias to /src
import { awardsCollection } from "@/firebase";
import AwardCard from "../components/AwardListItem.vue";

export default {
    name: "home",
    components: {
        AwardCard
    },
    data() {
        return {
            newAwardTitle: "",
            newAwardDetail: "",
            awards: []
        };
    },
    firestore() {
        return {
            awards: awardsCollection
        };
    },
    created() {
        this.refreshData();
    },
    methods: {
        refreshData() {
            awardsCollection.get().then(querySnapshot => {
                this.awards = [];
                querySnapshot.forEach(doc => {
                    // console.log(`${doc.id} data ${JSON.stringify(doc.data())}`);
                    const data = doc.data();
                    this.awards.push({
                        id: doc.id,
                        title: data.title,
                        detail: data.detail,
                        completed: data.completed,
                        createdAt: data.createdAt,
                        editMode: false
                    });
                });
            });
        },
        updateAward(award) {
            console.log(`updateAward ${JSON.stringify(award)}`);
            awardsCollection
                .doc(award.id)
                .update({ title: award.title, detail: award.detail })
                .then(() => {
                    // alert(`update doc with id ${award.id}`);
                })
                .catch(err => {
                    alert(`update error ${err.message}`);
                });
        },
        addAward() {
            if (this.newAwardTitle.length > 0) {
                awardsCollection
                    .add({
                        title: this.newAwardTitle,
                        detail: this.newAwardDetail,
                        completed: false,
                        createdAt: new Date()
                    })
                    .then(docId => {
                        console.log(`New Id ${docId.id}`);
                        // alert(`New Id ${docId.id}`);
                    })
                    .catch(err => {
                        alert(err.message);
                    });
                this.newAwardTitle = "";
                this.newAwardDetail = "";
                this.refreshData();
            }
        },
        deleteAward(award) {
            console.log(`${JSON.stringify(award)}`);
            awardsCollection
                .doc(award.id)
                .delete()
                .then(() => {
                    // console.log(`delete award`);
                    this.refreshData();
                })
                .catch(err => {
                    alert(err.message);
                });
        }
    }
};
</script>

<style scoped>
#app {
    background-color: beige;
}

button {
    background-color: transparent;
    border: 2px solid black;
}

li {
    list-style: none;
}
.card {
    /* Add shadows to create the "card" effect */
    box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    max-width: 500px;
    margin: 10px;
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
