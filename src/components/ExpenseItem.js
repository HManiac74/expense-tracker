import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2021, 3, 21);
    const expenseTitle = 'Car insurance';
    const expemseAmount = 294.67;

    return (
    <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">${expemseAmount}</div>
        </div>
    </div>);
}

export default ExpenseItem;