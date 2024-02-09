"use client";
import { expenseType } from "@/components/Expenses";
import { useEffect, useState } from "react";

export const useGetTopExpensiveCategory = () => {
  const [expenses, setExpenses] = useState<expenseType[]>([]);
  useEffect(() => {
    fetch("/api/expense")
      .then((res) => res.json())
      .then((data) => setExpenses(data?.data))
      .catch((err) => console.error(err));
  }, []);

  if (expenses) {
    const uniqueCategoriesSet = new Set(
      expenses.map((expense) => expense.category)
    );
    const uniqueCategoriesArray = Array.from(uniqueCategoriesSet);
    const separatedExpenses = uniqueCategoriesArray.map((category) => {
      return {
        category,
        expenses: expenses.filter((expense) => expense.category === category),
      };
    });

    const result = separatedExpenses.map((group) => ({
      category: group.category,
      totalExpense: group.expenses.reduce(
        (sum, expense) => sum + Number(expense.expense),
        0
      ),
    }));
    result.sort((a, b) => b.totalExpense - a.totalExpense);

    return result;
  }
};
