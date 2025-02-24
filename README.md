# JSON - SERVER;
 - Bir web projesi temelde iki kısımdan oluşur.

 1. Frontend
 2. Backend

 - Proje geliştirilirken backend'in bize sağladığı verileri alıp arayüzde kullanırız.Fakat elimizde hazır bir api olmadığı durumlarda api'in oluşturulmasını beklemek yerine "json-server" adında bir paket indiririr ve localimizde çalışan bir sahte backend elde ederiz.Bu backend tüm http metotlarını(get,post,put,patch,delete)destekler.

 # Json-Server Kullanarak Sahte Bir Api Nasıl Oluşturulur;

 1. Json - Server paketinin indir.
 2. Proje dizininde package.json ile aynı konumda bir db.json dosyası oluşturulur.
 3. Bu db.json dosyasında bir obje içerisinde herbir endpoint için birer dizi oluştururuz.
 4. "npx json-server db.json" komutunu çalıştırarak bu api aya kaldırılır.

 # HTTP METOTLARI;

 - Server ve client arasında iletişim kurmak için kullanılan metotlara Http metotları denir.

 1. Get: Server'dan veri çekmek için kullanılır
 
 2. Post: Server'a veri göndermek için kullanılır.Gönderilecek veri isteğin body kısmına eklenmelidir.
 
 3. Put: Server'daki bir veriyi güncellemek için kullanılır.Bu metotda güncellenmek istenen verinin tamamı isteğin body'sine eklenmelidir.

 4. Patch: Server'daki bir veriyi güncellemek için kullanılır.Sadece güncellenecek kısım isteğin body'sine eklenmelidir.

 5. Delete: Server'daki bir veriyi silmek için kullanılır.

 # AXİOS;
- Güncel projelerin çogunda kullanılan bu kütüphane bizim için api isteklerini kolaylaştırır.

- Gelen isteğin json'dan js nesnesine çevirilmesi işlemini yapar
- Gönderilecek verinin js nesnesinde json'a çevirilmesi işlemini yine axios yapar
- Parametreleri işler
- İsteklere zaman aşımı ekleyebilmizi sağlar
- Uzun uzun url tanımlamaları yerine baseUrl'ler oluşturarak daha az kod yazmamızı sağlar.
# Rehber
