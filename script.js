document.addEventListener("DOMContentLoaded", function () {
    const formContainer = document.getElementById("form-container");
    const tableContainer = document.getElementById("table-container");
    const clienteForm = document.getElementById("clienteForm");
    const clienteTableBody = document.getElementById("clienteTableBody");
    const voltarBtn = document.getElementById("voltarBtn");

    clienteForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Captura os dados do formulário
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const observacao = document.getElementById("observacao").value;

        // Adiciona os dados na tabela
        clienteTableBody.innerHTML = `
            <tr>
                <td>${nome}</td>
                <td>${email}</td>
                <td>${telefone}</td>
                <td>${observacao}</td>
            </tr>
        `;

        // Mostra a tabela e esconde o formulário
        formContainer.style.display = "none";
        tableContainer.style.display = "block";
    });

    voltarBtn.addEventListener("click", function () {
        // Esconde a tabela e mostra o formulário
        formContainer.style.display = "block";
        tableContainer.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const telefoneInput = document.getElementById("telefone");

    telefoneInput.addEventListener("input", function () {
        let input = telefoneInput.value.replace(/\D/g, ""); 
        input = input.replace(/^(\d{2})(\d)/g, "($1)$2"); 
        input = input.replace(/(\d{5})(\d)/, "$1-$2"); 
        telefoneInput.value = input.substring(0, 14); 
    });
});
