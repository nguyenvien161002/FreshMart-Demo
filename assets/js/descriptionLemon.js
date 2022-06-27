infoDescriptions.innerHTML = `
    <div class="des-product">
        <p>Chanh là một số loài thực vật cho quả nhỏ, thuộc chi Cam chanh (Citrus), khi chín có màu xanh hoặc vàng, thịt quả có vị chua. Quả chanh được sử dụng làm thực phẩm trên khắp thế giới - chủ yếu dùng nước ép của nó, thế nhưng phần cơm (các múi của chanh) và vỏ (zest) cũng được sử dụng, chủ yếu là trong nấu ăn và nướng bánh. Nước ép chanh chứa khoảng 5% (khoảng 0,3 mol / lít) axit citric, điều này giúp chanh có vị chua, và độ pH của chanh từ 2-3. Điều này làm cho nước ép chanh không đắt, có thể sử dụng thay axít cho các thí nghiệm khoa học trong giáo dục. Bởi vì có vị chua, nhiều thức uống và kẹo có mùi vị đã xuất hiện, bao gồm cả nước chanh.</p>
    </div>
`;

btnInfoProduct.classList.add('bgyellow');

btnInfoProduct.addEventListener('click', function() {
    btnInfoProduct.classList.add('bgyellow');
    btnReturnPolicy.classList.remove('bgyellow');
    btnStorageInstructions.classList.remove('bgyellow');
    infoDescriptions.innerHTML = `
        <div class="des-product">
            <p>Chanh là một số loài thực vật cho quả nhỏ, thuộc chi Cam chanh (Citrus), khi chín có màu xanh hoặc vàng, thịt quả có vị chua. Quả chanh được sử dụng làm thực phẩm trên khắp thế giới - chủ yếu dùng nước ép của nó, thế nhưng phần cơm (các múi của chanh) và vỏ (zest) cũng được sử dụng, chủ yếu là trong nấu ăn và nướng bánh. Nước ép chanh chứa khoảng 5% (khoảng 0,3 mol / lít) axit citric, điều này giúp chanh có vị chua, và độ pH của chanh từ 2-3. Điều này làm cho nước ép chanh không đắt, có thể sử dụng thay axít cho các thí nghiệm khoa học trong giáo dục. Bởi vì có vị chua, nhiều thức uống và kẹo có mùi vị đã xuất hiện, bao gồm cả nước chanh.</p>
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