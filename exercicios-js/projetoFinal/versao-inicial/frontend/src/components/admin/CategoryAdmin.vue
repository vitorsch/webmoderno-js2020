<template>
  <div class="category-admin">
    <b-form>
      <input id="category-id" type="hidden" v-model="category.id" />
          <b-form-group label="Categoria:" label-for="category-name">
            <b-form-input
              id="category-name"
              type="text"
              v-model="category.name"
              required
              placeholder="Informe o Nome da Categoria"
              :readonly="mode === 'remove'"
            />
          </b-form-group>
          <b-form-group label="Categoria Pai:" label-for="category-parentId">
            <b-form-select v-if="mode === 'save'"
              id="category-parentId"
              :options="categories"
              v-model="category.parentId"
            />
            <b-form-input v-else
              id="category-parentId"
              type="text"
              v-model="category.path"
              readonly
            />
          </b-form-group>
          <b-button variant="primary" v-if="mode === 'save'" @click="save"
            >Salvar</b-button
          >
          <b-button variant="danger" v-if="mode === 'remove'" @click="remove"
            >Excluir</b-button
          >
          <b-button class="ml-2" @click="reset">Cancelar</b-button>
    </b-form>
    <hr>
    <!-- Tabela de carregamento das Categorias -->
    <b-table hover striped :items="categories" :fields="fields">
      <template slot="actions" slot-scope="data">
        <b-button
          variant="warning"
          @click="loadCategory(data.item)"
          class="mr-2"
        >
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button
          variant="danger"
          @click="loadCategory(data.item, 'remove')"
          class="mr-2"
        >
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
      <!-- <template slot="path" slot-scope="data" @load="loadPath(data.item)">
        <span>{{ data.item.path }}</span>
      </template> Minha resolução-->
    </b-table>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "CategoryAdmin",
  data: function () {
    return {
      mode: "save",
      category: {},
      categories: [],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Categoria", sortable: true },
        { key: "path", label: "Caminho", sortable: true },
        { key: "actions", label: "Ações", sortable: true },
      ],
    };
  },
  methods: {
    loadCategories() {
      const url = `${baseApiUrl}/categories`;
      axios.get(url).then((res) => {
        this.categories = res.data.map(category => {
            return {...category, value: category.id, text: category.path}
        })
      });
    },
    loadCategory(category, mode = "save") {
      this.mode = mode;
      this.category = {...category}
    },
   /*  loadPath(category) {
      const url = `${baseApiUrl}/categories/`;
      axios.get(url).then((res) => {
        const getParent = (categories, parentId) => {
          const parent = categories.filter((parent) => parent.id === parentId);
          return parent.length ? parent[0] : null;
        };
        let path = category.name;
        let parent = getParent(res.data, category.parentId);

        while (parent) {
          path = `${parent.name} > ${path}`;
          parent = getParent(res.data, parent.parentId);
        }

        this.category.path = path;
      });
    }, Minha Resolução */
    reset() {
      (this.mode = "save"), (this.category = {}), this.loadCategories();
    },
    save() {
      const method = this.category.id ? "put" : "post";
      const id = this.category.id ? `/${this.category.id}` : "";
      axios[method](`${baseApiUrl}/categories${id}`, this.category)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      const id = this.category.id;
      axios
        .delete(`${baseApiUrl}/categories/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
  },
  mounted() {
    this.loadCategories();
  },
};
</script>

<style>
</style>