const productModal = document.getElementById('productModal');
productModal.addEventListener('show.bs.modal', event => {
    // Get the card that was clicked to trigger the modal
    const card = event.relatedTarget;

    // Extract the product info from the card's data-* attributes
    const name = card.getAttribute('data-name');
    const description = card.getAttribute('data-description');
    const price = card.getAttribute('data-price');
    const rating = parseFloat(card.getAttribute('data-rating')).toFixed(1);
    const reviews = card.getAttribute('data-reviews');
    const images = card.getAttribute('data-images');

    // Use the first image from the list for the modal's main display
    const firstImage = images.split('|')[0].trim();

    // Find the elements inside the modal that we need to update
    const modalTitle = productModal.querySelector('.modal-title');
    const modalImage = productModal.querySelector('#modal-product-image');
    const modalName = productModal.querySelector('#modal-product-name');
    const modalDescription = productModal.querySelector('#modal-product-description');
    const modalPrice = productModal.querySelector('#modal-product-price');
    const modalRating = productModal.querySelector('#modal-product-rating');
    const modalReviews = productModal.querySelector('#modal-product-reviews');

    // Update the modal's content with the product's data
    modalTitle.textContent = name;
    modalImage.src = firstImage;
    modalName.textContent = name;
    modalDescription.textContent = description;
    modalPrice.textContent = '$' + price;

    // Conditionally display the rating and reviews count
    if (reviews && reviews.toLowerCase() !== 'nan') {
        modalRating.innerHTML = `<i class="fas fa-star text-warning"></i> ${rating}`;
        modalReviews.textContent = `(${parseInt(reviews)} reviews)`;
    } else {
        modalRating.innerHTML = `<i class="fas fa-star text-warning"></i> ${rating}`;
        modalReviews.textContent = '(No reviews yet)';
    }
});