const form = document.getElementById('surveyForm');
    const popup = document.getElementById('popup');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let fields = form.elements;
        let values = [];

        for (let i = 0; i < fields.length; i++) {
            if (fields[i].name && fields[i].checked) {
                values.push({name: fields[i].name, value: fields[i].value});
            }
        }

        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'save_form_data.php', true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function() {
            if (this.status === 200) {
                popup.style.display = 'block';
                result.textContent = 'Form data saved successfully!';
            } else {
                popup.style.display = 'block';
                result.textContent = 'Error: ' + this.status + ' ' + this.statusText;
            }
        };

        xhr.send(JSON.stringify(values));
    });