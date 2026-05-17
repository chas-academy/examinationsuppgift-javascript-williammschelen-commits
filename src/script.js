const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");

const incomeButton = document.getElementById("incomeBtn");
const expenseButton = document.getElementById("expenseBtn");

const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");

const balanceElement = document.getElementById("balance");

let balance = 0;

incomeButton.addEventListener("click", () =>
{
    const { description, amount } = getCurrentInputValues();

    updateBalanceList(description, amount, "income");
});



expenseButton.addEventListener("click", () =>
{
    const { description, amount } = getCurrentInputValues();

    updateBalanceList(description, amount, "expense");
});

const getCurrentInputValues = () =>
{
    return {
        description: descInput.value.trim(),
        amount: Number(amountInput.value.trim())
    };
};

function updateBalanceList(description, amount, type)
{
    if (!description || typeof amount !== "number" || isNaN(amount) || amount <= 0) return;

    const listElement = document.createElement("li");

    if (type === "income")
    {
        balance += amount;
        listElement.textContent = `${description} - ${amount} kr (Inkomst)`;
        incomeList.appendChild(listElement);
    }
    else if (type === "expense")
    {
        balance -= amount;
        listElement.textContent = `${description} - ${amount} kr (Utgift)`;
        expenseList.appendChild(listElement);
    }
    else
    {
        return;
    }

    balanceElement.textContent = String(balance);
    descInput.value = "";
    amountInput.value = "";
}