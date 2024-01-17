import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.form');
form.addEventListener('submit', search);
const searchInput = document.getElementById('searchInput');
const gallery = document.querySelector('.gallery')
const loader = document.querySelector('.loader')


function search(event) {
    event.preventDefault();

    const apiKey = '41833958-d4e1402628473c9a9cbd6bb32';
    const inputValue = searchInput.value.trim();

    if (!inputValue) {
        iziToast.warning({
            message: "Please enter a search query.",
        });
        return;
    }

    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true`;
    loader.style.display = 'block';

    fetch(apiUrl)
        .then(response => response.json())
        .then(images => { 
                if (images.hits.length === 0) {
                iziToast.error({
                    message: "No images found. Please try again with a different search query.",
                });
                return;
            }

            const imageHTML = images.hits.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
                return `
                <li class="gallery-item">
                    <a class="gallery-link" href="${largeImageURL}">
                        <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
                    </a>
                    <div class="image-details">
                        <p>Likes </br> ${likes}</p>
                        <p>Views </br>  ${views}</p>
                        <p>Comments </br>  ${comments}</p>
                        <p>Downloads </br>  ${downloads}</p>
                    </div>
                </li>`
            }).join('');

            gallery.innerHTML = imageHTML;
            const lightbox = new SimpleLightbox('.gallery a');
            lightbox.refresh();
        })
        .catch(() => {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
           })
        })
        .finally(() => {
            loader.style.display = 'none';
        });
}