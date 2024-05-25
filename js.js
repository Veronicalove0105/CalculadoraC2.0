function appendToResult(value) {
    const result = document.getElementById('result');
    const startPos = result.selectionStart;
    const currentValue = result.value;
    result.value = currentValue.substring(0, startPos) + value + currentValue.substring(startPos, currentValue.length);
    result.setSelectionRange(startPos + 1, startPos + 1);
    result.focus();
  }  
  
  
  function calculate() {
    const resultField = document.getElementById('result');
    const resultExpression = resultField.value.replace("^", "**");
    const result = eval(resultExpression);
    resultField.value = result;
  }
  
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function deleteLast() {
    const result = document.getElementById('result');
    const startPos = result.selectionStart;
    if (startPos > 0) {
      const currentValue = result.value;
      result.value = currentValue.substring(0, startPos - 1) + currentValue.substring(startPos, currentValue.length);
      result.setSelectionRange(startPos - 1, startPos - 1);
    }
  }
  