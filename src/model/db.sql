create table categories(
    category_id uuid not null default uuid_generate_v4() primary key,
    category_title varchar(64) not null
);


create table subcategories(
    subcategory_id uuid not null default uuid_generate_v4() primary key,
    subcategory_title varchar(64) not null,
    categoryid uuid references categories(category_id) 
);

insert into categories(category_title) VALUES('kiyimlar');
insert into categories(category_title) VALUES('Kitoblar');

insert into subcategories(subcategory_title, categoryid) VALUES('bolalar kiyimi', 'df02ebc1-8a7a-4fe6-b793-94af248b559f');
insert into subcategories(subcategory_title, categoryid) VALUES('ayollar kiyimi', 'df02ebc1-8a7a-4fe6-b793-94af248b559f');
insert into subcategories(subcategory_title, categoryid) VALUES('erkaklar kiyimi', 'df02ebc1-8a7a-4fe6-b793-94af248b559f');

insert into subcategories(subcategory_title, categoryid) VALUES('badiiy kitoblar', 'f50b6f7e-12df-4d06-a39c-17eb69e4cf2f');
insert into subcategories(subcategory_title, categoryid) VALUES('ilmiy kitoblar', 'f50b6f7e-12df-4d06-a39c-17eb69e4cf2f');
insert into subcategories(subcategory_title, categoryid) VALUES('ertak kitoblar', 'f50b6f7e-12df-4d06-a39c-17eb69e4cf2f');

