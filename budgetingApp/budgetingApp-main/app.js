var bugdet;
var budgetAmount ;
var finalBudget;
function Budget(){
     bugdet = document.getElementById("Budget");
     finalBudget = document.getElementById("FinalBudget");
     budgetAmount = document.getElementById("BudgetAmount");
     budgetAmount.innerText=bugdet.value;
     finalBudget.innerText=bugdet.value;
}
var expenseDescription;
var expenseAmount;
var expenseDate;
var totalExpense ;
var amount;
var listElem;
var list;
var finalAmount;
var i = 0;
var listId;
function Expense() {
     expenseAmount = document.getElementById("ExpenseAmount");
     totalExpense = document.getElementById("TotalExpense");
     if(totalExpense.value != undefined){
          totalExpense.innerText = totalExpense.value + expenseAmount.value;
          totalExpense.value = expenseAmount.value;
          amount = amount + +expenseAmount.value;
          totalExpense.innerText = amount.toString();
          finalAmount = +finalBudget.innerText - +expenseAmount.value;
          finalBudget.innerText = finalAmount;
          i++;
          listId = "list"+i;
          list = document.getElementById("ExpenseList");
          listElem = `
                    <div>
                    <h4>${document.getElementById("ExpenseDescription").value}</h4>
                    <h5>${document.getElementById("ExpenseDate").value}</h5>
               </div>
               <div>
                    <span>${expenseAmount.value}</span>
                    <i class="fa-solid fa-circle-xmark" onclick="removeExpense()"></i>
               </div>
          `;
          var li = document.createElement("li");
          
          li.innerHTML = listElem;
          li.setAttribute('id',"list"+i);
          list.appendChild(li);

     }else{
          totalExpense.value = expenseAmount.value;
          amount = +expenseAmount.value;
          totalExpense.innerText = expenseAmount.value;
          console.log(finalBudget.innerText);
          console.log(expenseAmount.value);
          finalAmount = +finalBudget.innerText - +expenseAmount.value;
          finalBudget.innerText = finalAmount;
          i++;
          listId = "list"+i;
          
          list = document.getElementById("ExpenseList");
          listElem = `
                    <div>
                    <h4>${document.getElementById("ExpenseDescription").value}</h4>
                    <h5>${document.getElementById("ExpenseDate").value}</h5>
               </div>
               <div>
                    <span>${expenseAmount.value}</span>
                    <i class="fa-solid fa-circle-xmark" onclick="removeExpense()"></i>
               </div>
          `;
          var li = document.createElement("li");
          
          li.innerHTML = listElem;
          li.setAttribute('id',"list"+i);
          list.appendChild(li);
     }
     
}
var listRemove;
var span;
function removeExpense(){
     listRemove = document.querySelector("li");
     list.removeChild(listRemove);
     span = listRemove.querySelector("span");
     amount = amount - +span.innerText;
     finalBudget.innerText = (+finalBudget.innerText + +span.innerText).toString();
     totalExpense.innerText = amount.toString() ;
}
