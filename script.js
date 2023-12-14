//your code here

function addItem() {
            // Get input values
            var itemName = document.getElementById('item-name-input').value.trim();
            var itemPrice = parseFloat(document.getElementById('item-price-input').value);

            // Validate input
            if (itemName === '' || isNaN(itemPrice) || itemPrice <= 0) {
                alert('Invalid input. Please enter a valid item name and price.');
                return;
            }

            // Add item to the table
            var table = document.getElementById('shopping-list');
            var newRow = table.insertRow(table.rows.length - 1);

            var cell1 = newRow.insertCell(0);
            cell1.setAttribute('data-ns-test', 'item-name');
            cell1.textContent = itemName;

            var cell2 = newRow.insertCell(1);
            cell2.setAttribute('data-ns-test', 'item-price');
            cell2.textContent = itemPrice.toFixed(2);

            // Update grand total
            updateGrandTotal();
            
            // Clear input fields
            document.getElementById('item-name-input').value = '';
            document.getElementById('item-price-input').value = '';
        }

        function updateGrandTotal() {
            var table = document.getElementById('shopping-list');
            var total = 0;

            for (var i = 1; i < table.rows.length - 1; i++) {
                var price = parseFloat(table.rows[i].cells[1].textContent);
                total += price;
            }

            document.getElementById('grandTotal').textContent = total.toFixed(2);
        }
