<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>

  <component :is="selectedTab" />
</template>

<script>
import AddResource from './AddResource.vue'
import StoredResources from './StoredResources.vue'

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resouces',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org',
        },
      ],
    }
  },
  provide() {
    return {
      resources: this.storedResources,
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    },
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat'
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat'
    },
  },
}
</script>
