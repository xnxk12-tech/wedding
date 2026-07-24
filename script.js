function copyAccount(elementId) {
  // 계좌번호 텍스트 가져오기
  const accountText = document.getElementById(elementId).innerText;
  
  // 클립보드에 복사하기
  navigator.clipboard.writeText(accountText)
    .then(() => {
      alert('계좌번호가 복사되었습니다:\n' + accountText);
    })
    .catch(err => {
      console.error('복사 실패:', err);
    });
}
