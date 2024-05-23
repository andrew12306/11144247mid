const videos = [
    { id: 'yTAUY3Mzj8M?si=1h83Z1e7lSBR5fgh', title: '山木島', text: '一片森林開始於一顆種籽，一本書開始於一段篇章<br><br>山木島是全台灣第一個以<br>台灣山林丶思想丶美學為靈的伴手禮<br><br>將台灣這片土地上的記憶以糕點的形式展現出來<br><br>-以台灣山巒為靈感<br>-以台灣獨特美學為靈感<br>-以台灣價值為靈感<br>-以台灣在地味道為靈感<br><br>用來自世界各地的食材原料，寫出獨特的台灣味道' },
    { id: 'TjtTds5afO8?si=FHa4Qr4g8NAcK7et', title: '如邑堂', text: '太陽的手，飄香百年尋味台灣<br><br>太陽餅，為台中知名伴手禮之一<br>包覆著Q軟麥芽內餡<br>口感紮實而不膩<br>選用糯米麥芽<br>歷經多次調整達到和諧平衡<br>研發出如邑堂獨有的65:35黃金皮餡比<br><br>翻轉傳統再創經典 與世界對話<br>在傳統與經典中，我們選擇創造經典<br>以經典茶、小農水果為題<br>嘗試在原有的風味上疊加新的可能<br>展現糕餅的新風貌<br>延續著傳統手藝之美<br>打造讓台灣囡仔驕傲的餅，走向世界舞台' },
    { id: 'U3aFOooDnhU?si=miUOO8391OtdIimh', title: '軒記', text: '17歲炒肉酥學徒與肉乾的邂逅<br><br>為了讓客人吃到最安心、美味的肉乾<br>姚琦揚經歷了無數不眠不休的夜晚耐心研發<br>堅持依循古法的製作方式<br>嚴選原料品質及每個製作細節<br>如滷汁調配、火侯掌握等<br>秉持著「給顧客最好最美味」的初衷<br>就是要讓消費者每一口都能感受到台灣傳統肉乾的美味<br><br>堅持創新第一、品質第一、顧客第一<br>以「傳遞幸福好滋味」為宗旨<br>在追求創新但不失傳統風味的同時<br>研發超過百種令人回味無窮、口味獨具的肉乾' },
    { id: 'eYt5MpbPNJs?si=wS9Hv5_9cE9l3ikl', title: '明月堂', text: '遵循日式傳統細製工法，傳承純正的和菓子<br><br>經過了無數的歲月，經歷著無數的風霜<br><br>淬鍊出，和菓子之靈魂<br><br>明月堂<br>淬鍊十八年<br>周老師傅匠心獨運<br>堅守和菓真味<br>精選自然材料<br>傳統工法熬煮<br><br>每一口都是精緻品味' },
    { id: 'kO3fLp2NJso?si=tGXZsbEgalnNgiO3', title: '哈頓', text: '天然風味也可以很濃郁<br><br>風味濃度是冰淇淋的體驗中非常重要的一環<br>除了考驗工匠將味道嵌入冰淇淋中的技術<br>更直接性的取決於所使用的食材多寡<br>論述食材的高級、有機、新鮮都很加分<br>但我們哈頓更在意濃度的表現<br><br>風味是每個人吃進嘴裡最直觀的感受<br>一份優秀的冰淇淋風味標準<br>應該要新鮮、濃郁、天然<br>我不認同一些論點<br>"天然的食物味道吃起來就是淡淡的" ，偏荒謬<br>濃淡跟天然與否是分開評斷的<br>有很濃的天然食品<br>或很淡的香料食品' },
];

function changeVideo(index) {
    const video = videos[index];
    document.getElementById('youtube-video').src = `https://www.youtube.com/embed/${video.id}`;
    document.getElementById('video-title').innerHTML = video.title;
    document.getElementById('video-text').innerHTML = video.text;
}