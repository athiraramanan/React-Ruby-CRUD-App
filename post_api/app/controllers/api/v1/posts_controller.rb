class Api::V1::PostsController < ApplicationController

  # GET /posts
  def index
    @posts = Post.order("created_at DESC")
    p @posts
    render json: @posts
  end

  # GET /posts/:id
  def show
  	post = Post.find(params[:id])
    render json: post
  end

  # POST /posts
  def create
    post = Post.create(post_params)
    render json: post
  end

  # PUT /posts/:id
  def update
  	post = Post.find(params[:id])
    post.update(post_params)
    render json: post
  end

  # DELETE /posts/:id
  def destroy
    post = Post.find(params[:id])
    post.destroy
    head :no_content, status: :ok
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :tags)
  end

end
