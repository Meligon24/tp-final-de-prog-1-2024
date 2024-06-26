document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const name = this.dataset.name;
            const price = parseFloat(this.dataset.price);

            // Crear un nuevo elemento de lista para el carrito
            const li = document.createElement('li');
            li.textContent = `${name} - $${price.toFixed(2)}`;

            // Añadir el elemento al carrito
            cartItems.appendChild(li);

            // Actualizar el total
            total += price;
            totalElement.textContent = total.toFixed(2);
        });
    });
});
