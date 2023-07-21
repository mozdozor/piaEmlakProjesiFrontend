import { NavLink } from "react-router-dom";

const people = [
  {
    ilanTipi: "Satılık/Kiralık",
    ilanBasligi: "İlan Başlığı",
    ilİlce: "İl/İlçe",
    odaSayisi: "Oda Sayısı",
    fiyat: "Fiyat",
    emlakTipiCat: ["Konut"],
    ilanTipiCat: ["satilik", "kiralik"],
    odaSayisiCat: ["1+0"],
    katCat: ["bodrum", "zemin"],
    isitmaCat: ["dogalgaz", "klima"],
    esyaDurumCat: ["esyali"],
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    ilanTipi: "Satılık/Kiralık",
    ilanBasligi: "İlan Başlığı",
    ilİlce: "İl/İlçe",
    odaSayisi: "Oda Sayısı",
    fiyat: "Fiyat",
    emlakTipiCat: ["Konut"],
    ilanTipiCat: ["satilik"],
    odaSayisiCat: ["3+2"],
    katCat: ["2"],
    isitmaCat: ["klima"],
    esyaDurumCat: ["esyali", "esyasiz"],
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    ilanTipi: "Satılık/Kiralık",
    ilanBasligi: "İlan Başlığı",
    ilİlce: "İl/İlçe",
    odaSayisi: "Oda Sayısı",
    fiyat: "Fiyat",
    emlakTipiCat: ["Konut"],
    ilanTipiCat: ["kiralik"],
    odaSayisiCat: ["2+1"],
    katCat: ["5", "6", "7"],
    isitmaCat: ["dogalgaz"],
    esyaDurumCat: ["esyali", "esyasiz"],
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    ilanTipi: "Satılık/Kiralık",
    ilanBasligi: "İlan Başlığı",
    ilİlce: "İl/İlçe",
    odaSayisi: "Oda Sayısı",
    fiyat: "Fiyat",
    emlakTipiCat: ["Konut"],
    ilanTipiCat: ["satilik", "kiralik"],
    odaSayisiCat: ["1+1", "2+1"],
    katCat: ["bahce", "giris"],
    isitmaCat: ["klima", "dogalgaz"],
    esyaDurumCat: ["esyali"],
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    ilanTipi: "Satılık/Kiralık",
    ilanBasligi: "İlan Başlığı",
    ilİlce: "İl/İlçe",
    odaSayisi: "Oda Sayısı",
    fiyat: "Fiyat",
    emlakTipiCat: ["Konut"],
    ilanTipiCat: ["kiralik"],
    odaSayisiCat: ["3+1"],
    katCat: ["3"],
    isitmaCat: ["klima"],
    esyaDurumCat: ["esyasiz"],
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    ilanTipi: "Satılık/Kiralık",
    ilanBasligi: "İlan Başlığı",
    ilİlce: "İl/İlçe",
    odaSayisi: "Oda Sayısı",
    fiyat: "Fiyat",
    emlakTipiCat: ["isyeri"],
    ilanTipiCat: ["kiralik"],
    odaSayisiCat: ["2+1"],
    katCat: ["10+"],
    isitmaCat: ["dogalgaz", "kiralik"],
    esyaDurumCat: ["esyasiz"],
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];



const filteredPeople = people.filter((ilan) => {
  for (const key in people) {
    if (people[key].length > 0 && !people[key].includes(ilan[key])) {
      return false;
    }
  }
  return true;
});

console.log(filteredPeople);

const ArananIlanlar = ({advertisements}) => {
  return (
    <>
      <ul role="list" className="divide-y divide-gray-100">
        {advertisements.map((person) => (
          <NavLink to={`/ilan-detay?id=${person.id}`}>
            <li
              key={person.id}
              className="flex justify-between gap-x-6 py-5"
            >
              <div className="flex gap-x-4">
                <img
                  // className="h-24 w-24 flex-none rounded-full bg-gray-50"
                  className="ilan-liste-img"
                  src={process.env.PUBLIC_URL + `/images/${person.firstImagePath}`}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {person.advertisementType}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {person.title}
                  </p>

                  <div className="flex space-x-4">
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {person.city} - {person.state}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {person.room}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {person.price} ₺
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{person.role}</p>

                {person.lastSeen ? (
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Last seen{" "}
                    <time dateTime={person.lastSeenDateTime}>
                      {person.lastSeen}
                    </time>
                  </p>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    {/* <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                  </div> */}
                  </div>
                )}
              </div>
            </li>
          </NavLink>
        ))}
      </ul>
    </>
  );
}

export default ArananIlanlar;