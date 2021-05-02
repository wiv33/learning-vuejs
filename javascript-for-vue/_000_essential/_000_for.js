window.onload = () => {
    let isOdd = Math.round(Math.random() * 10) % 2;
    isOdd ? usedRepeat() : basicFor();
};

function usedRepeat () {

    let txt = 'usedRepeat()\n';
    const MAX = 9;
    let cnt = Math.round(MAX / 2); // -부터 +까지 반복하기 때문에 반으로 나누어 작업

    for (let i = -cnt + 1; i < cnt; i += 2) {
        txt += ' '.repeat(Math.abs((1 - (i + 1))) / 2) + '*'.repeat(cnt - Math.abs(i)) + '\n'
    }

    document.getElementById('txt').innerText = txt;
}

function basicFor () {
    let txt = 'basicFor()\n';
    const MAX = 9;
    let cnt = Math.round(MAX / 2); // -부터 +까지 반복하기 때문에 반으로 나누어 작업

    for (let i = -cnt; i < cnt; i++) {
        let temp = 0; // 출력할 문자가 별 인지 띄어쓰기 인지 구분할 변수
        let ABS = Math.abs(i);
        for (let j = 0; j < MAX - ABS; j++) {
            txt += temp < ABS ? ' ' : '*'
            temp++
        }
        txt += '\n'
    }


    document.getElementById('txt').innerText = txt;
}

