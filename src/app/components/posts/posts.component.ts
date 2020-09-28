import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  isEdit: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit(): void {

    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onNewPost(post: Post){
    this.posts.unshift(post);
  }

  editPost(post: Post){

    this.currentPost = post;
    this.isEdit = true;
  }

  onUpdatedPost(post: Post){

    this.posts.forEach((curr, index) => {

        if(post.id === curr.id){

          console.log(`index: ${index}`)
            this.posts.splice(index, 1);

            console.log(this.posts);

            this.posts.unshift(post);

            this.isEdit = false;
            this.currentPost = {
              id: 0,
              title: '',
              body: ''
            }
        }
    });
  }

  removePost(post: Post){

    if(confirm('Are you sure?')){

      this.postService.removePost(post.id).subscribe(() => {

        this.posts.forEach((curr, index) => {

          if(post.id === curr.id){
  
              console.log(`index: ${index}`)
              this.posts.splice(index, 1);
  
              //console.log(this.posts);
          }
      });

      });
    }
  }

}
