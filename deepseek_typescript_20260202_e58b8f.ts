console.log('✅ Solana Transaction Builder loaded!');

const output = document.getElementById('output') as HTMLDivElement;
const demoBtn = document.getElementById('demoBtn') as HTMLButtonElement;

function updateOutput(text: string) {
    if (output) {
        output.textContent = text;
        console.log(text);
    }
}

// Демо-функция
function runDemo() {
    updateOutput('🚀 Demo started...\n');
    
    // Имитация создания транзакции
    setTimeout(() => {
        updateOutput('✅ Transaction created!\n' +
                    '📝 Details:\n' +
                    '- Network: Devnet\n' +
                    '- Type: Transfer\n' +
                    '- Amount: 0.1 SOL\n' +
                    '- Status: Ready to sign');
    }, 1000);
}

// Инициализация
if (demoBtn) {
    demoBtn.addEventListener('click', runDemo);
}

updateOutput('🟢 Ready! Click "Run Demo" button.');