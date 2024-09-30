<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button, Input, Label, Textarea } from 'flowbite-svelte';

    export let data;
  </script>
  
  <svelte:head>
    <title>Blog</title>
  </svelte:head>
  
  <div class="max-w-5xl mx-auto px-4 py-16 space-y-8">
    <div class="space-y-4">
      <h1 class="text-3xl font-bold">Blog</h1>
  
      {#if data.posts && data.posts.length}
        <div class="space-y-2">
          {#each data.posts as post (post.id)}
            <h2 class="text-2xl font-bold">
              <a href="/blog/{post.slug}">{post.title}</a>
            </h2>
          {/each}
        </div>
      {/if}
    </div>

    <form class="space-y-4" method="post" use:enhance>
        <div class="space-y-2">
          <Label for="title">Title</Label>
          <Input
            name="title"
            id="title"
            type="text"
            placeholder="Title"
            required
          />
        </div>
      
        <div class="space-y-2">
          <Label for="slug">Slug</Label>
          <Input name="slug" id="slug" type="text" placeholder="Slug" required />
        </div>
      
        <div class="space-y-2">
          <Label for="content">Content</Label>
          <Textarea name="content" id="content" placeholder="Content" rows={10} />
        </div>
      
        <Button type="submit">Create New Post</Button>
      </form>
  </div>

  