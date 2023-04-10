// 告白成功確率2.js
function calculate_probability(formData) {
    // それぞれの質問に対応する確率を格納する配列
    const probabilities = [];
  
    // 以下に、それぞれの質問に対応する確率をprobabilities配列に追加するコードを追記
    // 例：probabilities.push(質問1の確率);

    // 質問1: 性別
    const gender = formData.get("gender");
    const genderProbability = gender === "男" ? 0.497 : 0.664;
    probabilities.push(genderProbability);

    // 質問2: 時期
    const month = parseInt(formData.get("month"));
    let monthProbability;
    if (month === 3) {
      monthProbability = 0.7; // 3月の成功確率
    } else if (month === 12) {
      monthProbability = 0.9; // 12月の成功確率
    } else {
      monthProbability = 0.8; // その他の月の成功確率
    }
    probabilities.push(monthProbability);



    // 質問3: 出会ってから告白するまでの期間
    const duration = parseInt(formData.get("duration"));
    let periodProbability;
    if (duration < 3) {
     periodProbability = 0.81;
    } else if (duration >= 3 && duration <= 6) {
     periodProbability = 0.61;
    } else {
     periodProbability = 0.47;
    }
    probabilities.push(periodProbability);

    // 質問4: 告白する時間帯
    const time = formData.get("time");
    let timeProbability;
    switch (time) {
      case "0-5":
        timeProbability = 0.75;
        break;
      case "6-11":
        timeProbability = 0.6667;
        break;
      case "12-17":
        timeProbability = 0.4419;
        break;
      default:
        timeProbability = 0.5833;
    }
    probabilities.push(timeProbability);

    // 質問5: 告白する場所
    const location = formData.get("location");
    let locationProbability;
    switch (location) {
    case "自分の家":
        locationProbability = 0.6964;
        break;
    case "相手の家":
        locationProbability = 0.8;
        break;
    case "学校":
        locationProbability = 0.2308;
        break;
    case "道端":
        locationProbability = 0.56;
        break;
    case "公園":
        locationProbability = 0.4545;
        break;
    default:
        locationProbability = 0.5333;
    }
    probabilities.push(locationProbability);

    // 質問6: 告白の手段
    const method = formData.get("method");
    let methodProbability;
    switch (method) {
    case "直接対面":
        methodProbability = 0.6023;
        break;
    case "電話":
        methodProbability = 0.6471;
        break;
    case "手紙":
        methodProbability = 0.2827;
    break;
    default:
        methodProbability = 0.5625;
    }
    probabilities.push(methodProbability);

    // 質問7: 告白する内容
    const content = formData.get("content");
    let contentProbability;
    switch (content) {
    case "好意のみ":
        contentProbability = 0.4008;
        break;
    case "交際申し込み":
        contentProbability = 0.72;
        break;
    case "好意＋交際申し込み":
        contentProbability = 0.7;
        break;
    default:
        contentProbability = 0.7143;
    }
    probabilities.push(contentProbability);


    // 質問8: 相手の恋愛状況
    const relationship_status = formData.get("relationship_status");
    let relationshipStatusProbability;
    switch (relationship_status) {
    case "恋人がいた":
        relationshipStatusProbability = 0.2727;
        break;
    case "誰かに片思い":
        relationshipStatusProbability = 0.2963;
        break;
    case "失恋直後":
        relationshipStatusProbability = 0.6667;
        break;
    case "自分に恋愛感情":
        relationshipStatusProbability = 0.8929;
        break; // ここに break; を追加
    case "何もなし":
        relationshipStatusProbability = 0.5717;
        break;
    default:
        relationshipStatusProbability = 0.5781;
    }
    probabilities.push(relationshipStatusProbability);

    // 質問9: 相手の年齢
    const age_difference = formData.get("age_difference");
    let ageDifferenceProbability;
    switch (age_difference) {
      case "3歳以上年上":
        ageDifferenceProbability = 0.8;
        break;
      case "1〜2歳以上年上":
        ageDifferenceProbability = 0.5957;
        break;
      case "同い年1〜2歳年下":
        ageDifferenceProbability = 0.7837;
        break;
      default:
        ageDifferenceProbability = 0.5;
    }
    probabilities.push(ageDifferenceProbability);
    


        
    const sum = probabilities.reduce((acc, curr) => acc + curr, 0);
    const averageProbability = sum / probabilities.length;    
    return averageProbability;
}


document.getElementById("calculateProbabilityButton").addEventListener("click", () => {
    const formData = new FormData(document.getElementById("predictionForm"));
    const success_rate = calculate_probability(formData);
    const result_percentage = (success_rate * 100).toFixed(2);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `告白成功確率: ${result_percentage}%`;
    resultDiv.style.fontSize = '3rem';
});
