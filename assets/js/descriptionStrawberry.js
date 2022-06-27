infoDescriptions.innerHTML = `
    <div class="des-product">
        <p>Dâu tây (danh pháp khoa học: Fragaria) hay còn gọi là dâu đất là một chi thực vật hạt kín và loài thực vật có hoa thuộc họ Hoa hồng (Rosaceae) cho quả được nhiều người ưa chuộng. Dâu tây xuất xứ từ châu Mỹ và được các nhà làm vườn châu Âu cho lai tạo vào thế kỷ 18 để tạo nên giống dâu tây được trồng rộng rãi hiện nay. Loài này được (Weston) Duchesne miêu tả khoa học đầu tiên năm 1788.</p>
        <p>Dâu tây được trồng lấy trái ở vùng ôn đới. Với mùi thơm hấp dẫn cùng vị dâu ngọt lẫn chua nên dâu tây được ưa chuộng.</p>
        <p>Ở Việt Nam, khí hậu mát mẻ của miền núi Đà Lạt là môi trường thích hợp với việc canh tác dâu nên loại trái cây này được xem là đặc sản của vùng cao nguyên nơi đây.</p>
        <p>Quả dâu tây thường được sử dụng để làm các món tráng miệng. Dâu tây giàu vitamin C và là nguồn cung cấp dồi dào các chất flavonoit cần thiết.</p>
    </div>
`;

btnInfoProduct.classList.add('bgyellow');

btnInfoProduct.addEventListener('click', function() {
    btnInfoProduct.classList.add('bgyellow');
    btnReturnPolicy.classList.remove('bgyellow');
    btnStorageInstructions.classList.remove('bgyellow');
    infoDescriptions.innerHTML = `
        <div class="des-product">
            <p>Dâu tây (danh pháp khoa học: Fragaria) hay còn gọi là dâu đất là một chi thực vật hạt kín và loài thực vật có hoa thuộc họ Hoa hồng (Rosaceae) cho quả được nhiều người ưa chuộng. Dâu tây xuất xứ từ châu Mỹ và được các nhà làm vườn châu Âu cho lai tạo vào thế kỷ 18 để tạo nên giống dâu tây được trồng rộng rãi hiện nay. Loài này được (Weston) Duchesne miêu tả khoa học đầu tiên năm 1788.</p>
            <p>Dâu tây được trồng lấy trái ở vùng ôn đới. Với mùi thơm hấp dẫn cùng vị dâu ngọt lẫn chua nên dâu tây được ưa chuộng.</p>
            <p>Ở Việt Nam, khí hậu mát mẻ của miền núi Đà Lạt là môi trường thích hợp với việc canh tác dâu nên loại trái cây này được xem là đặc sản của vùng cao nguyên nơi đây.</p>
            <p>Quả dâu tây thường được sử dụng để làm các món tráng miệng. Dâu tây giàu vitamin C và là nguồn cung cấp dồi dào các chất flavonoit cần thiết.</p>
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