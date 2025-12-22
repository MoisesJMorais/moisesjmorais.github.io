const config = {
            "200":  { camada: 396, fardo: 12, maxC: 9, maxF: 32, maxU: 0 }, // maxU alterado para 0
            "300":  { camada: 360, fardo: 12, maxC: 7, maxF: 29, maxU: 11 },
            "900":  { camada: 204, fardo: 6,  maxC: 5, maxF: 33, maxU: 5 },
            "1500": { camada: 120, fardo: 6,  maxC: 4, maxF: 19, maxU: 5 },
            "3000": { camada: 56,  fardo: 0,  maxC: 4, maxF: 0,  maxU: 55 },
            "5000": { camada: 42,  fardo: 0,  maxC: 3, maxF: 0,  maxU: 41 }
        };

        function updateMaxValues() {
            const sku = document.getElementById('sku').value;
            const data = config[sku];
            
            const inputC = document.getElementById('camadas');
            const inputF = document.getElementById('fardos');
            const inputU = document.getElementById('unidades');

            // Atualiza limites
            inputC.max = data.maxC;
            inputU.max = data.maxU;
            inputF.max = data.maxF;

            // Bloqueio de Fardos
            inputF.disabled = (data.fardo === 0);
            inputF.value = "";

            // Bloqueio de Unidades (Novo: para o SKU 200ml)
            inputU.disabled = (data.maxU === 0);
            inputU.value = "";
            
            inputC.value = "";
            calculate();
        }

        function calculate() {
            const sku = document.getElementById('sku').value;
            const data = config[sku];
            
            let inputC = document.getElementById('camadas');
            let inputF = document.getElementById('fardos');
            let inputU = document.getElementById('unidades');

            let c = parseInt(inputC.value) || 0;
            let f = parseInt(inputF.value) || 0;
            let u = parseInt(inputU.value) || 0;

            // Validação de Máximos
            if (c > data.maxC) { c = data.maxC; inputC.value = c; }
            if (data.fardo > 0 && f > data.maxF) { f = data.maxF; inputF.value = f; }
            if (u > data.maxU) { u = data.maxU; inputU.value = u; }

            const total = (c * data.camada) + (f * data.fardo) + u;
            document.getElementById('total').innerText = total.toLocaleString('pt-BR');
        }
