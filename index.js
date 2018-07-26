function toggleVoteContainer(){
  //find the vote container on web page
  var voteContainer = document.getElementsById("vote-container")

  if(voteContainer.style.display === "none"){
    voteContainer.style.display = "block";
  }
}

function increasedLikes(element){
  var likes = element.innerText;

  //convert string to integer
  likes = parseInt(likes);

//increase likes value by 1
  likes += 1;

  //change value of likes on page
  element.innerText = likes
}
  var scores = document.getElementsByClassName("score");
  var score = scores[0];

  var dogImages = ["http://cushingsindogs.com/wp-content/uploads/2018/02/CID-website-Survey-Page.jpg", "https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-03/jaclou_contons_dodged_to_lighten.jpg?itok=f96PbcnB","http://diligentdogs.com/wp-content/uploads/2016/06/Diligent-Dogs-Puppy-Training-FI1.png"]
  var catImages = ["https://metrouk2.files.wordpress.com/2018/04/tucker-and-finley.jpg","https://d3n8a8pro7vhmx.cloudfront.net/taxpayers/pages/679/attachments/original/1499663166/4-ways-cheer-up-depressed-cat.jpg?1499663166","http://sites.psu.edu/siowfa15/wp-content/uploads/sites/29639/2015/10/cat.jpg"]


function changeImage(element) {
  console.log(element.id);

  animals = [];

  if(element.id === "cats-carousel") {
    animals = catImages;
  } else {
    animals = dogImages;
  }


  var carousel = document.getElementById(element.id);

  //get img
  var image = carousel.getElementsByTagName('img')[0];

  //get img url on page
  var imageUrl = image.getAttribute('src');

//get index of image on page in animals array
  var imageIndex = animals.indexOf(imageUrl);

//add 1 to the index; reset to 0 if last element in animals
  if(imageIndex === animals.length - 1){
    imageIndex = 0;
  } else {
    imageIndex += 1;
  }
  //reset url to the new url using new index
  imageUrl = animals[imageIndex];

  image.src = imageUrl;

}
