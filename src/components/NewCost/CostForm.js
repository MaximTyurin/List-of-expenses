import { useState } from 'react';
import './CostForm.css';

const CostForm = ({ onSaveCostData, onCancel }) => {
    const [userInput, setUserInput] = useState({
        description: '',
        amount: '',
        date: '',
    });

    const nameChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                description: event.target.value,
            };
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            amount: event.target.value,
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            date: event.target.value,
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const costData = {
            ...userInput,
            date: new Date(userInput.date),
        };

        onSaveCostData(costData);
        setUserInput({
            description: '',
            amount: '',
            date: '',
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Название</label>
                    <input
                        type='text'
                        onChange={nameChangeHandler}
                        value={userInput.description}
                    />
                </div>
                <div className='new-cost__control'>
                    <label>Сумма</label>
                    <input
                        type='number'
                        value={userInput.amount}
                        onChange={amountChangeHandler}
                        min='0.01'
                        step='0.01'
                    />
                </div>
                <div className='new-cost__control'>
                    <label>Дата</label>
                    <input
                        onChange={dateChangeHandler}
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value={userInput.date}
                    />
                </div>
                <div className='new-cost__actions'>
                    <button type='submit'>Добавить расход</button>
                    <button type='button' onClick={onCancel}>
                        Отмена
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CostForm;
