function Registro(year, province, ss_afiliation, n_cont_indef, n_cont_eventual, n_cont_temporary){
    this.year = year;
    this.province = province;
    this.ss_afiliation = ss_afiliation;
    this.n_cont_indef = n_cont_indef;
    this.n_cont_eventual = n_cont_eventual;
    this.n_cont_temporary = n_cont_temporary;
}

function parse(text) {
    //Aqui guardaremos los datos finales parseados
    let datos = [];

    // Obtenemos las lineas del texto
    let lines = text.replace(/\r/g, '').split('\n');

    //Para cada linea realizamos una funcion
    lines.map(line => {
        let values = line.split(',');
        let reg = new Registro(parseInt(values[0]), values[1], parseInt(values[2]), parseInt(values[3]), parseInt(values[4]), parseInt(values[5]));
        datos.push(reg);
    });

    return datos
}

var texto_prueba  = `2012,Almeria,230575,4952,53370,12993
2012,Cadiz,314086,8601,100619,31162
2012,Cordoba,269604,5516,81145,31269
2012,Granada,284092,6969,83707,26567
2012,Huelva,173225,3352,64050,14532
2012,Jaen,222413,4004,74437,29948
2012,Malaga,460584,14278,120453,36842
2012,Sevilla,609250,17218,175997,53858
2013,Almeria,234112,5924,57692,15334
2013,Cadiz,312674,8922,101339,33694
2013,Cordoba,269608,5628,83973,33843
2013,Granada,288414,7155,83992,30624
2013,Huelva,164939,3476,66778,15894
2013,Jaen,233907,3872,81083,33977
2013,Malaga,467152,14690,120657,41817
2013,Sevilla,602963,17627,180755,59564
2014,Almeria,242746,7045,60606,15423
2014,Cadiz,319682,10777,100311,36123
2014,Cordoba,270373,6558,84026,33210
2014,Granada,295971,9055,84066,32141
2014,Huelva,169677,4108,68460,17087
2014,Jaen,223016,4250,77791,35193
2014,Malaga,485176,18956,123492,46330
2014,Sevilla,617140,20982,184601,62557
2015,Almeria,251576,7421,63622,18326
2015,Cadiz,324387,11201,103102,40490
2015,Cordoba,276374,7533,84312,34508
2015,Granada,298807,9104,83916,35396
2015,Huelva,173280,5157,68904,18608
2015,Jaen,235092,4907,78778,35785
2015,Malaga,501064,19500,130029,53095
2015,Sevilla,626250,22935,184162,67312
2016,Almeria,259419,9035,64646,17289
2016,Cadiz,333771,11543,105586,37637
2016,Cordoba,282642,7520,83712,31861
2016,Granada,307913,9715,85207,33937
2016,Huelva,178590,4371,68542,18009
2016,Jaen,240157,5670,77207,34382
2016,Malaga,519577,21243,133403,49214
2016,Sevilla,641183,23708,189533,62806
2017,Almeria,267887,9956,67735,18780
2017,Cadiz,349348,13690,111377,40016
2017,Cordoba,289062,8934,85044,34170
2017,Granada,314576,11066,86714,35173
2017,Huelva,184987,5091,72151,18651
2017,Jaen,241531,5469,77182,35270
2017,Malaga,542608,24899,142304,52615
2017,Sevilla,662450,28526,199026,65948
2018,Almeria,276293,13367,64493,19147
2018,Cadiz,359820,15783,110284,40088
2018,Cordoba,295205,12318,83342,33216
2018,Granada,324068,14930,84159,34465
2018,Huelva,191710,6711,69610,19261
2018,Jaen,246551,7702,74926,35286
2018,Malaga,564467,31709,140660,53325
2018,Sevilla,683295,35165,198047,66629
2019,Almeria,283146,13452,64249,19244
2019,Cadiz,369127,15027,114038,39457
2019,Cordoba,295531,10270,82681,32019
2019,Granada,329908,13746,85108,34282
2019,Huelva,194005,6217,70098,19724
2019,Jaen,244824,6669,74239,34923
2019,Malaga,582309,28056,143055,53448
2019,Sevilla,696221,34194,199047,64663
2020,Almeria,284313,11139,58349,15571
2020,Cadiz,359570,13300,102871,31365
2020,Cordoba,292234,8506,76719,28329
2020,Granada,323375,10920,77502,28604
2020,Huelva,192759,4750,69438,16321
2020,Jaen,243902,6308,72123,30163
2020,Malaga,562898,22341,118375,38440
2020,Sevilla,689844,29094,179297,52882
2021,Almeria,293473,15379,56643,17561
2021,Cadiz,377902,17417,102495,34855
2021,Cordoba,298405,12785,73036,30885
2021,Granada,335916,14283,78244,31143
2021,Huelva,201149,8482,64029,18522
2021,Jaen,245127,7816,69564,31372
2021,Malaga,598809,30085,127795,45124
2021,Sevilla,714337,38818,181757,58577
2022,Almeria,299997,46702,19412,11256
2022,Cadiz,386500,61566,42198,25642
2022,Cordoba,298984,37301,27031,23572
2022,Granada,340162,47113,33437,24468
2022,Huelva,203990,30871,21503,14461
2022,Jaen,240743,27001,27190,22191
2022,Malaga,621629,99367,50047,31950
2022,Sevilla,729400,106987,75484,53200`;

//GUardamos los datos en el Array de objetos de tipo Registro
var datos = parse(texto_prueba);


//Con esta funcion hacemos el filtro por provincias de manera que se pueda cambiar llegado el momento
function province_filter(list, province){
    lista = list.filter((n) => {
        return n.province == province;
    });

    return { 
        filtro : lista,
        filtrados : lista.length
            };
}
//La funcion devuelve un diccionario con el array de filtrados y el numero de filtrados

//Para hacer una única vez el filtrado lo realizamos aquí y ya accedemos a sus valores


// Con esta funcion mostramos por pantalla el resultado de hacer la media filtrada por provincia de los datos solicitados 
function filter_by_province_mean_log(province, attributeName, datos){

    let filtrado = province_filter(datos, province);

    console.log(`El valor medio que buscamos por ${province} para el dato ${attributeName} es ${filtrado.filtro.map((n) => {
        if (n.hasOwnProperty(attributeName)){
            return n[attributeName];
        }
    }).reduce((a,n) => {
        return a + n;
    })/filtrado.filtrados} \n`);
}


filter_by_province_mean_log('Almeria', 'n_cont_eventual', datos);

filter_by_province_mean_log('Almeria', 'ss_afiliation', datos);

filter_by_province_mean_log('Almeria', 'n_cont_indef', datos);