describe('Test des parametres de la fonction', function() {
	
	it('la fonction doit prendre 3 parametres', function() {
		expect(convertisseur('USD', 2, 'EUR')).not.toBe(null);
    });
    
    it('les 3 parametres doivent etre du bon type', function() {
		
    });

});

describe('Test resultats de la fonction', function() {
	
	it('doit convertir des USD dans les autres monnaies', function() {
		expect(convertisseur('USD', 2, 'EUR')).not.toBe(null);
        expect(convertisseur('USD', 2, 'KRW')).not.toBe(null);
        expect(convertisseur('USD', 2, 'NZD')).not.toBe(null);
    });
    
    it('doit convertir des EUR dans les autres monnaies', function() {
		expect(convertisseur('EUR', 2, 'USD')).not.toBe(null);
        expect(convertisseur('EUR', 2, 'KRW')).not.toBe(null);
        expect(convertisseur('EUR', 2, 'NZD')).not.toBe(null);
    });

    it('doit convertir des KRW dans les autres monnaies', function() {
		expect(convertisseur('KRW', 2, 'USD')).not.toBe(null);
        expect(convertisseur('KRW', 2, 'EUR')).not.toBe(null);
        expect(convertisseur('KRW', 2, 'NZD')).not.toBe(null);
    });

    it('doit convertir des NZD dans les autres monnaies', function() {
		expect(convertisseur('NZD', 2, 'USD')).not.toBe(null);
        expect(convertisseur('NZD', 2, 'EUR')).not.toBe(null);
        expect(convertisseur('NZD', 2, 'KRW')).not.toBe(null);
    });

    it('ne doit pas convertir des mauvais montants', function() {
		
    });

});