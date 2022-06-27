infoDescriptions.innerHTML = `
    <div class="des-product">
        <p>Đào (danh pháp khoa học: Prunus persica) là một loài cây được trồng để lấy quả hay hoa. Nó là một loài cây sớm rụng lá, thân gỗ nhỏ, có thể cao tới 5–10 m. Lá của nó có hình mũi mác, dài 7–15 cm và rộng 2–3 cm. Hoa nở vào đầu mùa xuân, trước khi ra lá; hoa đơn hay có đôi, đường kính 2,5–3 cm, màu hồng với 5 cánh hoa. Quả đào cùng với quả của anh đào, mận, mơ là các loại quả hạch.Quả của nó có một hạt giống to được bao bọc trong một lớp vỏ gỗ cứng (gọi là "hột"), cùi thịt màu vàng hay ánh trắng, có mùi vị thơm ngon và lớp vỏ có lông tơ mềm như nhung.</p>
        <p>Tên gọi khoa học persica có lẽ có từ niềm tin ban đầu của người châu Âu cho rằng đào có nguồn gốc ở khu vực Ba Tư (Persia), nay là Iran. Sự đồng thuận lớn trong giới các nhà thực vật học ngày nay đã cho rằng nó có nguồn gốc từ Trung Quốc và được đưa vào Ba Tư cũng như khu vực Địa Trung Hải theo con đường tơ lụa vào khoảng thời gian ban đầu của lịch sử nhân loại, có lẽ vào khoảng thiên niên kỷ 2 TCN (Huxley và những người khác, 1992).</p>
        <p>Các giống đào trồng được chia thành hai loại là "hột rời" và "hột dính", phụ thuộc vào việc hột có dính với cùi thịt hay không; cả hai loại này đều có cùi thịt trắng hay vàng. Quả đào với cùi thịt trắng thông thường có vị rất ngọt và ít vị chua, trong khi loại có cùi thịt màu vàng thông thường có vị chua kèm theo vị ngọt, mặc dù điều này cũng có sự dao động lớn. Cả hai màu thông thường đều có các vệt đỏ trong lớp thịt của chúng. Loại đào cùi trắng, ít chua là phổ biến nhất tại Trung Quốc.</p>
    </div>
`;

btnInfoProduct.classList.add('bgyellow');

btnInfoProduct.addEventListener('click', function() {
    btnInfoProduct.classList.add('bgyellow');
    btnReturnPolicy.classList.remove('bgyellow');
    btnStorageInstructions.classList.remove('bgyellow');
    infoDescriptions.innerHTML = `
        <div class="des-product">
            <p>Đào (danh pháp khoa học: Prunus persica) là một loài cây được trồng để lấy quả hay hoa. Nó là một loài cây sớm rụng lá, thân gỗ nhỏ, có thể cao tới 5–10 m. Lá của nó có hình mũi mác, dài 7–15 cm và rộng 2–3 cm. Hoa nở vào đầu mùa xuân, trước khi ra lá; hoa đơn hay có đôi, đường kính 2,5–3 cm, màu hồng với 5 cánh hoa. Quả đào cùng với quả của anh đào, mận, mơ là các loại quả hạch.Quả của nó có một hạt giống to được bao bọc trong một lớp vỏ gỗ cứng (gọi là "hột"), cùi thịt màu vàng hay ánh trắng, có mùi vị thơm ngon và lớp vỏ có lông tơ mềm như nhung.</p>
            <p>Tên gọi khoa học persica có lẽ có từ niềm tin ban đầu của người châu Âu cho rằng đào có nguồn gốc ở khu vực Ba Tư (Persia), nay là Iran. Sự đồng thuận lớn trong giới các nhà thực vật học ngày nay đã cho rằng nó có nguồn gốc từ Trung Quốc và được đưa vào Ba Tư cũng như khu vực Địa Trung Hải theo con đường tơ lụa vào khoảng thời gian ban đầu của lịch sử nhân loại, có lẽ vào khoảng thiên niên kỷ 2 TCN (Huxley và những người khác, 1992).</p>
            <p>Các giống đào trồng được chia thành hai loại là "hột rời" và "hột dính", phụ thuộc vào việc hột có dính với cùi thịt hay không; cả hai loại này đều có cùi thịt trắng hay vàng. Quả đào với cùi thịt trắng thông thường có vị rất ngọt và ít vị chua, trong khi loại có cùi thịt màu vàng thông thường có vị chua kèm theo vị ngọt, mặc dù điều này cũng có sự dao động lớn. Cả hai màu thông thường đều có các vệt đỏ trong lớp thịt của chúng. Loại đào cùi trắng, ít chua là phổ biến nhất tại Trung Quốc.</p>
        </div>
    `;
});

btnReturnPolicy.addEventListener('click', function() {
    btnReturnPolicy.classList.add('bgyellow');
    btnInfoProduct.classList.remove('bgyellow');
    btnStorageInstructions.classList.remove('bgyellow');
    infoDescriptions.innerHTML = `
        <div class="des-returngoods-maintain">
            <p><b>ND Fresh </b> là hệ thống cửa hàng thực phẩm sạch uy tín nhất ở Việt Nam, chuyên cung cấp thực phẩm sạch tới từng bếp ăn của gia đình bạn.</p>
            <p><b>Tầm nhìn:</b> Được nuôi trồng, chế biến theo phương Bio (sinh học), Organic (hữu cơ), Eco (sinh thái); cam kết không bán hàng giả, hàng nhái và hàng kém chất lượng. Sản phẩm được giao đến tay khách hàng luôn đúng cam kết, đúng chất lượng niệm yết, luôn được bảo quản trong môi trường lý tưởng, đảm bảo vệ sinh an toàn thực phẩm.</p>
            <p><b>Mục tiêu:</b> Sản phẩm được giao đến tay khách hàng luôn đúng cam kết, đúng chất lượng niệm yết, luôn được bảo quản trong môi trường lý tưởng, đảm bảo vệ sinh an toàn thực phẩm.</p>
        </div>
    `;
});

btnStorageInstructions.addEventListener('click', function() {
    btnStorageInstructions.classList.add('bgyellow');
    btnReturnPolicy.classList.remove('bgyellow');
    btnInfoProduct.classList.remove('bgyellow');
    infoDescriptions.innerHTML = `
        <div class="des-storageinstructions">
            <div class="des-importedfruit">
                <h4 class="title-storageinstructions">TRÁI CÂY NHẬP KHẨU</h4>
                <p>Tất cả trái cây nhập khẩu đều được bảo quản lạnh trang suốt quá trình vận chuyển về Việt Nam, nên khi nhận hàng, quý khách vui lòng bảo quản ngay trong tủ lạnh có nhiệt độ từ 5-8 độ C để đảm bảo chất lượng trái cây. Khi để ngoài, với nền nhiệt độ thất thường (nắng nóng ẩm) của vùng nhiệt đới, trái cây nhập khẩu rất nhanh bị giảm về cả hình thức và chất lượng.</p>
                <p>Ví dụ như Nho, Dâu Tây, Cherry chỉ cần bỏ ở ngoài khoảng 3 tiếng là cuống đã se, quả đã mềm đi và rất dễ bị ruồi nhặng đậu và đẻ trứng khiến trong vòng 24 quả sẽ bị mốc, thối thậm chí trứng ruồi nở còn sinh ra giòi. Táo, lê để ngoài khoảng 24h sẽ có hiện tượng chín nhanh khiến quả có độ giòn giảm, độ ngọt tăng.</p>
                <p>Một số loại quả cần chín để ăn thì ăn đến đâu nên bỏ ra đến đó và cần đậy kỹ để tránh côn trùng châm chích. Ví dụ: Na dai Đài Loan, Bơ Hass...bỏ ra ngoài vài quả để chín ăn dần (để 1-2 ngày là chín).</p>
            </div>
            <div class="des-domesticfruit">
                <h4 class="title-storageinstructions">TRÁI CÂY VIỆT NAM</h4>
                <p>Trái cây Việt Nam do vận chuyển trong nước nên không cần bảo quản lạnh. Tuy nhiên, để đảm bảo chất lượng tốt nhất, sử dụng cho hương vị thơm ngon nhất, vẫn nên để lạnh rồi sử dụng.</p>
                <p>Nếu có cách bảo quản hiệu quả hơn, quý khách hãy đóng góp cho Thế Giới Nông Sản để chúng tôi cập nhật thông tin và giúp thêm thật nhiều khách hàng khác biết cách bảo quản trái cây đúng cách nhé.</p>
            </div>
        </div>
    `;
});