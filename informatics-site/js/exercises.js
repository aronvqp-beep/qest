// Упражнения: тесты + задания на написание кода
const EXERCISES = {
  6: {
    title: "6 класс",
    subtitle: "Основы информатики и первые шаги в коде",
    items: [
      {
        id: "6-1", title: "Что такое информация?", type: "quiz",
        theory: "Информация — сведения об окружающем мире. По способу восприятия: визуальная (зрение), аудиальная (слух), тактильная (осязание).",
        example: "Картинка — визуальная, музыка — аудиальная.",
        question: "Что НЕ является видом информации по способу восприятия?",
        options: ["Визуальная", "Аудиальная", "Тактильная", "Цифровая"],
        answer: 3,
        explanation: "Цифровая — форма представления, а не способ восприятия."
      },
      {
        id: "6-2", title: "Бит и байт", type: "quiz",
        theory: "Бит — 0 или 1. 8 бит = 1 байт.",
        example: "Буква «А» занимает 1 байт = 8 бит.",
        question: "Сколько бит в одном байте?",
        options: ["4", "8", "16", "1024"],
        answer: 1, explanation: "1 байт = 8 бит."
      },
      {
        id: "6-3", title: "Устройства ввода", type: "quiz",
        theory: "Ввод: клавиатура, мышь, микрофон. Вывод: монитор, принтер, колонки.",
        example: "Печатаешь — клавиатура (ввод). Смотришь на экран — монитор (вывод).",
        question: "Какое устройство является устройством ВВОДА?",
        options: ["Монитор", "Принтер", "Клавиатура", "Колонки"],
        answer: 2, explanation: "Клавиатура — устройство ввода."
      },
      {
        id: "6-4", title: "Первая программа: print", type: "code",
        theory: "В Python команда print() выводит текст на экран. Текст пишут в кавычках — одинарных или двойных.",
        example: "print(\"Привет, мир!\")\n→ Привет, мир!",
        hint: "Напиши: print(\"Привет, я программист!\")",
        question: "Выведи на экран: Привет, я программист!",
        starter: "print(\"...\")",
        expectedOutput: "Привет, я программист!",
        explanation: "Нужно: print(\"Привет, я программист!\")"
      },
      {
        id: "6-5", title: "Алгоритм — это...", type: "quiz",
        theory: "Алгоритм — точное описание последовательности действий для решения задачи.",
        example: "Алгоритм «почистить зубы»: щётка → паста → чистить → прополоскать.",
        question: "Алгоритм — это:",
        options: ["Программа на Python", "Точное описание последовательности действий", "Список файлов", "Устройство"],
        answer: 1, explanation: "Алгоритм — описание действий."
      },
      {
        id: "6-6", title: "Вывод фразы", type: "code",
        theory: "print может выводить любой текст. Замени текст в кавычках на нужный.",
        example: "print(\"Анна\") → Анна",
        hint: "print(\"Меня зовут Робот\")",
        question: "Выведи на экран: Меня зовут Робот",
        starter: "",
        expectedOutput: "Меня зовут Робот",
        explanation: "print(\"Меня зовут Робот\")"
      },
      {
        id: "6-7", title: "Двоичное число 101", type: "quiz",
        theory: "В двоичной: разряды — степени 2. 101₂ = 4+0+1 = 5.",
        example: "1101₂ = 8+4+1 = 13.",
        question: "Чему равно двоичное число 101 в десятичной?",
        options: ["3", "5", "6", "7"],
        answer: 1, explanation: "1·4+0·2+1·1 = 5."
      },
      {
        id: "6-8", title: "Две строки", type: "code",
        theory: "Каждый print выводит текст с новой строки.",
        example: "print(\"Раз\")\nprint(\"Два\")",
        hint: "Две команды print — одна под другой.",
        question: "Выведи две строки:\nПривет\nМир",
        starter: "",
        expectedOutput: "Привет\nМир",
        explanation: "print(\"Привет\") и print(\"Мир\")"
      },
      {
        id: "6-9", title: "Безопасность в сети", type: "quiz",
        theory: "Нельзя сообщать незнакомым адрес, школу, телефон, пароли.",
        example: "В игре просят номер школы — не отвечай.",
        question: "Что НЕЛЬЗЯ сообщать незнакомым в интернете?",
        options: ["Любимый цвет", "Адрес дома и школу", "Любимый предмет", "Имя питомца"],
        answer: 1, explanation: "Личные данные защищаем."
      },
      {
        id: "6-10", title: "Вывод числа", type: "code",
        theory: "Числа в print можно писать без кавычек: print(42).",
        example: "print(100) → 100",
        hint: "print(2024)",
        question: "Выведи на экран число 2024",
        starter: "",
        expectedOutput: "2024",
        explanation: "print(2024)"
      },
      {
        id: "6-11", title: "Ctrl+C", type: "quiz",
        theory: "Ctrl+C — копировать, Ctrl+V — вставить, Ctrl+X — вырезать, Ctrl+Z — отменить.",
        example: "Выделил → Ctrl+C → Ctrl+V.",
        question: "Какая комбинация для копирования?",
        options: ["Ctrl+V", "Ctrl+C", "Ctrl+X", "Ctrl+Z"],
        answer: 1, explanation: "Ctrl+C = Copy."
      },
      {
        id: "6-12", title: "Текст и число", type: "code",
        theory: "Можно вывести текст и число: print(\"Ответ:\", 5)",
        example: "print(\"Сумма:\", 10) → Сумма: 10",
        hint: "print(\"Мне 12 лет\")",
        question: "Выведи: Мне 12 лет",
        starter: "",
        expectedOutput: "Мне 12 лет",
        explanation: "print(\"Мне 12 лет\")"
      }
    ]
  },
  7: {
    title: "7 класс",
    subtitle: "Переменные, ввод и простые алгоритмы",
    items: [
      {
        id: "7-1", title: "Кодирование: 7 бит", type: "quiz",
        theory: "n бит кодируют 2ⁿ значений. 7 бит → 128.",
        example: "3 бита → 8 комбинаций.",
        question: "Сколько символов можно закодировать 7 битами?",
        options: ["64", "128", "256", "512"],
        answer: 1, explanation: "2⁷ = 128."
      },
      {
        id: "7-2", title: "Переменная", type: "code",
        theory: "Переменная хранит значение. a = 10, затем print(a).",
        example: "name = \"Аня\"\nprint(name) → Аня",
        hint: "a = 10\nprint(a)",
        question: "Создай переменную a со значением 10 и выведи её.",
        starter: "a = \nprint()",
        expectedOutput: "10",
        explanation: "a = 10\nprint(a)"
      },
      {
        id: "7-3", title: "Ветвление", type: "quiz",
        theory: "Ветвление: ЕСЛИ условие ТО действие1 ИНАЧЕ действие2.",
        example: "ЕСЛИ дождь ТО зонт ИНАЧЕ кепка.",
        question: "Какая конструкция выбирает действие по условию?",
        options: ["Цикл", "Ветвление", "Линейная", "Рекурсия"],
        answer: 1, explanation: "Ветвление (if)."
      },
      {
        id: "7-4", title: "Сумма переменных", type: "code",
        theory: "С переменными можно считать: x + y.",
        example: "a = 3\nb = 4\nprint(a + b) → 7",
        hint: "x = 5\ny = 7\nprint(x + y)",
        question: "Задай x = 5, y = 7 и выведи их сумму.",
        starter: "",
        expectedOutput: "12",
        explanation: "x = 5\ny = 7\nprint(x + y)"
      },
      {
        id: "7-5", title: "Логика И и ИЛИ", type: "quiz",
        theory: "И — оба истинны. ИЛИ — хотя бы одно истинно.",
        example: "(true И false) = false. false ИЛИ true = true.",
        question: "(true И false) ИЛИ true = ?",
        options: ["true", "false", "Ошибка", "null"],
        answer: 0, explanation: "false OR true = true."
      },
      {
        id: "7-6", title: "Строка в переменной", type: "code",
        theory: "Строки тоже в переменных: word = \"Текст\"",
        example: "msg = \"Ура!\"\nprint(msg)",
        hint: "word = \"Информатика\"\nprint(word)",
        question: "Сохрани в word текст Информатика и выведи.",
        starter: "",
        expectedOutput: "Информатика",
        explanation: "word = \"Информатика\"\nprint(word)"
      },
      {
        id: "7-7", title: "13 в двоичную", type: "input",
        theory: "Делим на 2, остатки снизу вверх.",
        example: "13 → 1101₂",
        question: "Переведи 13 в двоичную систему (без пробелов).",
        answer: "1101", explanation: "13 = 8+4+1 = 1101."
      },
      {
        id: "7-8", title: "Умножение", type: "code",
        theory: "Оператор * — умножение.",
        example: "print(6 * 7) → 42",
        hint: "n = 6\nprint(n * 7)",
        question: "Задай n = 6 и выведи n * 7.",
        starter: "",
        expectedOutput: "42",
        explanation: "n = 6\nprint(n * 7)"
      },
      {
        id: "7-9", title: "Цикл пока", type: "quiz",
        theory: "while проверяет условие ДО тела. Если ложно — 0 раз.",
        example: "Пока не кипит — греть.",
        question: "Сколько раз выполнится тело, если условие сразу ложно?",
        options: ["1", "0", "Бесконечно", "Зависит"],
        answer: 1, explanation: "0 раз."
      },
      {
        id: "7-10", title: "Два вывода", type: "code",
        theory: "Можно вывести несколько переменных подряд.",
        example: "print(a)\nprint(b)",
        hint: "x = 100\ny = 200\nprint(x)\nprint(y)",
        question: "Задай x=100, y=200. Выведи x, затем y (с новой строки).",
        starter: "",
        expectedOutput: "100\n200",
        explanation: "x=100\ny=200\nprint(x)\nprint(y)"
      },
      {
        id: "7-11", title: "Таблица истинности", type: "quiz",
        theory: "Для n переменных строк: 2ⁿ.",
        example: "2 переменные → 4 строки.",
        question: "Сколько строк в таблице истинности для 3 переменных?",
        options: ["3", "6", "8", "9"],
        answer: 2, explanation: "2³ = 8."
      },
      {
        id: "7-12", title: "Площадь", type: "code",
        theory: "Площадь прямоугольника = длина × ширина.",
        example: "print(5 * 4) → 20",
        hint: "print(8 * 5)",
        question: "Длина 8, ширина 5. Выведи площадь.",
        starter: "",
        expectedOutput: "40",
        explanation: "print(8 * 5)"
      }
    ]
  },
  8: {
    title: "8 класс",
    subtitle: "Python: условия, циклы, списки",
    items: [
      {
        id: "8-1", title: "Язык Python", type: "quiz",
        theory: "Python — простой язык, часто первый в школе.",
        example: "print(\"Привет\") — одна строка.",
        question: "Какой язык чаще изучают первым в школе?",
        options: ["C++", "Python", "Assembler", "Java"],
        answer: 1, explanation: "Python."
      },
      {
        id: "8-2", title: "Условие if", type: "code",
        theory: "if условие:\n    действие\nОтступ обязателен!",
        example: "x = 10\nif x > 0:\n    print(\"Да\")",
        hint: "x = 5\nif x > 0:\n    print(\"Положительное\")",
        question: "Задай x = 5. Если x > 0, выведи: Положительное",
        starter: "x = 5\n",
        expectedOutput: "Положительное",
        explanation: "if x > 0:\n    print(\"Положительное\")"
      },
      {
        id: "8-3", title: "range(5)", type: "quiz",
        theory: "range(5) даёт 0,1,2,3,4 — пять чисел.",
        example: "for i in range(3): print(i) → 0 1 2",
        question: "Сколько раз выполнится: for i in range(5): ?",
        options: ["4", "5", "6", "0"],
        answer: 1, explanation: "5 раз."
      },
      {
        id: "8-4", title: "Цикл for", type: "code",
        theory: "for i in range(n): повторяет тело n раз.",
        example: "for i in range(3):\n    print(i)",
        hint: "for i in range(4):\n    print(i)",
        question: "Выведи числа 0, 1, 2, 3 каждое с новой строки.",
        starter: "",
        expectedOutput: "0\n1\n2\n3",
        explanation: "for i in range(4):\n    print(i)"
      },
      {
        id: "8-5", title: "Индекс списка", type: "input",
        theory: "Индексы с 0: a[0], a[1], a[2]...",
        example: "a=[10,20,30,40]; a[2] → 30",
        question: "Как получить третий элемент a = [10, 20, 30, 40]?",
        answer: "a[2]", explanation: "Индекс 2."
      },
      {
        id: "8-6", title: "Список и print", type: "code",
        theory: "colors = [\"а\", \"б\"]\nprint(colors[0])",
        example: "a = [5, 10, 15]\nprint(a[1]) → 10",
        hint: "colors = [\"красный\", \"зелёный\", \"синий\"]\nprint(colors[0])",
        question: "Список colors: красный, зелёный, синий. Выведи первый элемент.",
        starter: "",
        expectedOutput: "красный",
        explanation: "colors = [\"красный\", \"зелёный\", \"синий\"]\nprint(colors[0])"
      },
      {
        id: "8-7", title: "LAN", type: "quiz",
        theory: "LAN = Local Area Network — локальная сеть.",
        example: "Компьютеры в кабинете — LAN.",
        question: "LAN означает:",
        options: ["Глобальная сеть", "Локальная сеть", "Беспроводная", "Скорость"],
        answer: 1, explanation: "Локальная сеть."
      },
      {
        id: "8-8", title: "if-else", type: "code",
        theory: "if условие:\n    ...\nelse:\n    ...",
        example: "if n == 0:\n    print(\"Ноль\")\nelse:\n    print(\"Не ноль\")",
        hint: "n = 0\nif n == 0:\n    print(\"Ноль\")\nelse:\n    print(\"Не ноль\")",
        question: "n = 0. Если n равно 0 — выведи Ноль, иначе — Не ноль.",
        starter: "n = 0\n",
        expectedOutput: "Ноль",
        explanation: "if n == 0: print(\"Ноль\") else: print(\"Не ноль\")"
      },
      {
        id: "8-9", title: "IP-адрес", type: "quiz",
        theory: "IPv4: 4 октета, например 192.168.0.1",
        example: "Роутер часто 192.168.1.1",
        question: "Сколько октетов в IPv4?",
        options: ["2", "3", "4", "6"],
        answer: 2, explanation: "4 октета."
      },
      {
        id: "8-10", title: "Сумма списка", type: "code",
        theory: "Сложить элементы: a[0]+a[1]+a[2]",
        example: "print(nums[0]+nums[1]+nums[2])",
        hint: "nums = [10, 20, 30]\nprint(nums[0] + nums[1] + nums[2])",
        question: "nums = [10, 20, 30]. Выведи сумму всех элементов.",
        starter: "nums = [10, 20, 30]\n",
        expectedOutput: "60",
        explanation: "print(nums[0]+nums[1]+nums[2])"
      },
      {
        id: "8-11", title: "Алгоритм Евклида", type: "quiz",
        theory: "Алгоритм Евклида находит НОД двух чисел.",
        example: "НОД(48,18)=6",
        question: "Алгоритм Евклида находит:",
        options: ["НОК", "НОД", "Простые числа", "Факториал"],
        answer: 1, explanation: "НОД."
      },
      {
        id: "8-12", title: "Квадраты чисел", type: "code",
        theory: "В цикле можно считать i*i.",
        example: "for i in range(1,4):\n    print(i*i)",
        hint: "for i in range(1, 5):\n    print(i * i)",
        question: "Выведи квадраты чисел 1, 2, 3, 4.",
        starter: "",
        expectedOutput: "1\n4\n9\n16",
        explanation: "for i in range(1, 5):\n    print(i * i)"
      }
    ]
  },
  9: {
    title: "9 класс",
    subtitle: "Функции, строки, основы веб",
    items: [
      {
        id: "9-1", title: "Слово def", type: "quiz",
        theory: "Функция объявляется через def имя():",
        example: "def privet():\n    print(\"Hi\")",
        question: "Ключевое слово для функции в Python?",
        options: ["function", "def", "func", "define"],
        answer: 1, explanation: "def."
      },
      {
        id: "9-2", title: "Простая функция", type: "code",
        theory: "def имя():\n    тело\nПотом вызов: имя()",
        example: "def hello():\n    print(\"Hi\")\nhello()",
        hint: "def greet():\n    print(\"Привет\")\ngreet()",
        question: "Функция greet печатает Привет. Напиши и вызови её.",
        starter: "",
        expectedOutput: "Привет",
        explanation: "def greet():\n    print(\"Привет\")\ngreet()"
      },
      {
        id: "9-3", title: "Срез строки", type: "input",
        theory: "s[0:5] — символы с 0 по 4.",
        example: "\"Информатика\"[0:5] = \"Инфор\"",
        question: "s = \"Информатика\". Что вернёт s[0:5]?",
        answer: "Инфор", explanation: "Индексы 0–4."
      },
      {
        id: "9-4", title: "Функция с параметром", type: "code",
        theory: "def f(x):\n    print(x)\nf(5) передаёт 5.",
        example: "def show(n):\n    print(n)\nshow(42)",
        hint: "def show(msg):\n    print(msg)\nshow(\"Код\")",
        question: "Функция show(msg) печатает msg. Вызови с аргументом Код.",
        starter: "",
        expectedOutput: "Код",
        explanation: "def show(msg):\n    print(msg)\nshow(\"Код\")"
      },
      {
        id: "9-5", title: "Тег ссылки", type: "quiz",
        theory: "HTML: <a href=\"...\">текст</a> — ссылка.",
        example: "<a href=\"https://ya.ru\">Яндекс</a>",
        question: "Какой тег создаёт гиперссылку?",
        options: ["<p>", "<a>", "<link>", "<href>"],
        answer: 1, explanation: "<a>."
      },
      {
        id: "9-6", title: "return", type: "code",
        theory: "return возвращает значение из функции.",
        example: "def add(a,b):\n    return a+b\nprint(add(2,3)) → 5",
        hint: "def double(x):\n    return x * 2\nprint(double(7))",
        question: "Функция double(x) возвращает x*2. Выведи double(7).",
        starter: "",
        expectedOutput: "14",
        explanation: "def double(x):\n    return x * 2\nprint(double(7))"
      },
      {
        id: "9-7", title: "HTTPS", type: "quiz",
        theory: "HTTPS = HTTP + шифрование.",
        example: "Банк всегда на https://",
        question: "Чем HTTPS отличается от HTTP?",
        options: ["Скоростью", "Шифрованием", "Только мобильный", "Ничем"],
        answer: 1, explanation: "Шифрование."
      },
      {
        id: "9-8", title: "Длина строки", type: "code",
        theory: "len(s) — длина строки.",
        example: "print(len(\"Привет\")) → 6",
        hint: "print(len(\"Python\"))",
        question: "Выведи длину строки Python",
        starter: "",
        expectedOutput: "6",
        explanation: "print(len(\"Python\"))"
      },
      {
        id: "9-9", title: "Рекурсия", type: "quiz",
        theory: "Рекурсия — функция вызывает себя. Нужен базовый случай.",
        example: "fact(n): if n<=1: return 1",
        question: "Что обязательно у рекурсивной функции?",
        options: ["Цикл for", "Базовый случай", "Глобальные переменные", "Список"],
        answer: 1, explanation: "Базовый случай."
      },
      {
        id: "9-10", title: "Сумма функцией", type: "code",
        theory: "Функция с двумя параметрами и return.",
        example: "def summa(a,b):\n    return a+b",
        hint: "def summa(a, b):\n    return a + b\nprint(summa(3, 9))",
        question: "summa(a,b) возвращает сумму. Выведи summa(3, 9).",
        starter: "",
        expectedOutput: "12",
        explanation: "def summa(a,b):\n    return a+b\nprint(summa(3,9))"
      },
      {
        id: "9-11", title: "Фишинг", type: "quiz",
        theory: "Фишинг — обман ради паролей через поддельные письма/сайты.",
        example: "«Аккаунт заблокирован, введите пароль» — фишинг.",
        question: "Фишинг — это:",
        options: ["Спорт", "Мошенничество ради личных данных", "Антивирус", "Шифрование"],
        answer: 1, explanation: "Кража данных обманом."
      },
      {
        id: "9-12", title: "Цикл и слово", type: "code",
        theory: "print в цикле повторяет вывод.",
        example: "for i in range(3):\n    print(\"Go\")",
        hint: "for i in range(3):\n    print(\"Код\")",
        question: "Выведи слово Код три раза (каждое с новой строки).",
        starter: "",
        expectedOutput: "Код\nКод\nКод",
        explanation: "for i in range(3):\n    print(\"Код\")"
      }
    ]
  },
  10: {
    title: "10 класс",
    subtitle: "ООП, структуры данных, алгоритмы",
    items: [
      {
        id: "10-1", title: "Класс в ООП", type: "quiz",
        theory: "Класс — шаблон. Объект — экземпляр.",
        example: "Класс «Собака», объект — «Шарик».",
        question: "Класс в ООП — это:",
        options: ["Конкретный объект", "Шаблон для объектов", "Функция", "Переменная"],
        answer: 1, explanation: "Шаблон."
      },
      {
        id: "10-2", title: "Факториал циклом", type: "code",
        theory: "n! = 1·2·...·n. Считаем циклом.",
        example: "f=1\nfor i in range(1,6):\n    f=f*i\nprint(f)",
        hint: "f = 1\nfor i in range(1, 6):\n    f = f * i\nprint(f)",
        question: "Вычисли 5! циклом и выведи результат.",
        starter: "",
        expectedOutput: "120",
        explanation: "f=1\nfor i in range(1,6):\n    f*=i\nprint(f)"
      },
      {
        id: "10-3", title: "Бинарный поиск", type: "quiz",
        theory: "Бинарный поиск — O(log n).",
        example: "1024 элемента → ~10 сравнений.",
        question: "Сложность бинарного поиска?",
        options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
        answer: 2, explanation: "O(log n)."
      },
      {
        id: "10-4", title: "Стек", type: "quiz",
        theory: "Стек: LIFO — последний пришёл, первый ушёл.",
        example: "Стопка тарелок.",
        question: "Принцип стека?",
        options: ["FIFO", "LIFO", "Случайный", "Приоритет"],
        answer: 1, explanation: "LIFO."
      },
      {
        id: "10-5", title: "Максимум в списке", type: "code",
        theory: "Ищем максимум перебором.",
        example: "m = a[0]\nfor x in a:\n    if x > m: m = x",
        hint: "a = [3, 7, 2, 9, 5]\nm = a[0]\nfor x in a:\n    if x > m:\n        m = x\nprint(m)",
        question: "В [3, 7, 2, 9, 5] найди и выведи максимум.",
        starter: "a = [3, 7, 2, 9, 5]\n",
        expectedOutput: "9",
        explanation: "Перебор с обновлением максимума."
      },
      {
        id: "10-6", title: "SELECT", type: "quiz",
        theory: "SELECT ... FROM таблица — выборка.",
        example: "SELECT имя FROM Ученики;",
        question: "Команда выборки в SQL?",
        options: ["GET", "SELECT", "FETCH", "READ"],
        answer: 1, explanation: "SELECT."
      },
      {
        id: "10-7", title: "Сумма 1..10", type: "code",
        theory: "Сумма циклом: s=0; for i in range(1,11): s+=i",
        example: "print(sum) после цикла",
        hint: "s = 0\nfor i in range(1, 11):\n    s = s + i\nprint(s)",
        question: "Выведи сумму чисел от 1 до 10.",
        starter: "",
        expectedOutput: "55",
        explanation: "s=0\nfor i in range(1,11):\n    s+=i\nprint(s)"
      },
      {
        id: "10-8", title: "Очередь", type: "quiz",
        theory: "Очередь: FIFO.",
        example: "Очередь в магазине.",
        question: "Принцип очереди?",
        options: ["LIFO", "FIFO", "FILO", "Случайный"],
        answer: 1, explanation: "FIFO."
      },
      {
        id: "10-9", title: "Чётные в списке", type: "code",
        theory: "Чётное: x % 2 == 0.",
        example: "if x % 2 == 0: count += 1",
        hint: "a = [1,2,3,4,5,6]\nc = 0\nfor x in a:\n    if x % 2 == 0:\n        c = c + 1\nprint(c)",
        question: "В [1,2,3,4,5,6] посчитай количество чётных.",
        starter: "a = [1, 2, 3, 4, 5, 6]\n",
        expectedOutput: "3",
        explanation: "Три чётных: 2, 4, 6."
      },
      {
        id: "10-10", title: "BFS", type: "quiz",
        theory: "BFS — обход в ширину.",
        example: "Кратчайший путь в лабиринте.",
        question: "Обход графа «в ширину»?",
        options: ["DFS", "BFS", "Dijkstra", "Prim"],
        answer: 1, explanation: "BFS."
      },
      {
        id: "10-11", title: "Развернуть список", type: "code",
        theory: "a[::-1] разворачивает список.",
        example: "print([1,2,3][::-1]) → [3, 2, 1]",
        hint: "a = [1, 2, 3, 4]\nprint(a[::-1])",
        question: "Список [1, 2, 3, 4]. Выведи в обратном порядке.",
        starter: "a = [1, 2, 3, 4]\n",
        expectedOutput: "[4, 3, 2, 1]",
        explanation: "print(a[::-1])"
      },
      {
        id: "10-12", title: "Динамическое программирование", type: "quiz",
        theory: "ДП: подзадачи + сохранение результатов.",
        example: "Фибоначчи с мемоизацией.",
        question: "Идея ДП:",
        options: ["Случайный перебор", "Подзадачи и сохранение результатов", "Только рекурсия", "Жадный выбор"],
        answer: 1, explanation: "Подзадачи + память."
      }
    ],
    advanced: [
      {
        id: "10-a1", title: "Усложнённое: O(n²)", type: "quiz",
        theory: "Два вложенных цикла по n → O(n²).",
        example: "for i in range(n):\n  for j in range(n):",
        question: "Сложность двух вложенных for range(n)?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(2ⁿ)"],
        answer: 2, explanation: "O(n²)."
      },
      {
        id: "10-a2", title: "Усложнённое: Фибоначчи F10", type: "code",
        theory: "F1=1, F2=1, дальше сумма предыдущих.",
        example: "a,b=1,1\nfor _ in range(8): a,b=b,a+b",
        hint: "a, b = 1, 1\nfor i in range(8):\n    a, b = b, a + b\nprint(a)",
        question: "Выведи 10-е число Фибоначчи (F1=1, F2=1).",
        starter: "",
        expectedOutput: "55",
        explanation: "F10 = 55."
      },
      {
        id: "10-a3", title: "Усложнённое: INNER JOIN", type: "quiz",
        theory: "INNER JOIN — только совпадения.",
        example: "SELECT * FROM A INNER JOIN B ON ...",
        question: "JOIN только по совпадениям?",
        options: ["LEFT", "RIGHT", "INNER", "FULL"],
        answer: 2, explanation: "INNER JOIN."
      },
      {
        id: "10-a4", title: "Усложнённое: уникальные", type: "code",
        theory: "Собираем уникальные: if x not in r: r.append(x)",
        example: "Проверка «есть ли уже в списке».",
        hint: "a = [1, 2, 2, 3, 1, 4]\nr = []\nfor x in a:\n    if x not in r:\n        r.append(x)\nprint(r)",
        question: "Из [1, 2, 2, 3, 1, 4] выведи уникальные по порядку.",
        starter: "a = [1, 2, 2, 3, 1, 4]\n",
        expectedOutput: "[1, 2, 3, 4]",
        explanation: "Добавляем, если ещё не было."
      }
    ]
  },
  11: {
    title: "11 класс",
    subtitle: "ЕГЭ, алгоритмы, современные темы",
    items: [
      {
        id: "11-1", title: "1A1 из 16-ричной", type: "input",
        theory: "A=10. 1·256 + 10·16 + 1 = 417.",
        example: "1A1₁₆ = 417₁₀",
        question: "1A1 из 16-ричной в десятичную?",
        answer: "417", explanation: "256+160+1=417."
      },
      {
        id: "11-2", title: "Закон де Моргана", type: "quiz",
        theory: "¬(A ∨ B) = ¬A ∧ ¬B",
        example: "НЕ (дождь ИЛИ ветер) = НЕ дождь И НЕ ветер.",
        question: "¬(A ∨ B) эквивалентно:",
        options: ["¬A ∨ ¬B", "¬A ∧ ¬B", "A ∧ B", "A ∨ ¬B"],
        answer: 1, explanation: "Закон де Моргана."
      },
      {
        id: "11-3", title: "Чётные через while", type: "code",
        theory: "while условие: тело. Меняй переменную!",
        example: "k=0\nwhile k<=8:\n    print(k)\n    k+=2",
        hint: "k = 0\nwhile k <= 8:\n    print(k)\n    k = k + 2",
        question: "Выведи чётные от 0 до 8 включительно (через while).",
        starter: "",
        expectedOutput: "0\n2\n4\n6\n8",
        explanation: "while с шагом 2."
      },
      {
        id: "11-4", title: "Выигрышная позиция", type: "quiz",
        theory: "Выигрышная — есть ход в проигрышную для противника.",
        example: "Можно взять последний камень — выигрыш.",
        question: "Выигрышная позиция — если:",
        options: ["Все ходы в проигрышные", "Есть ход в проигрышную для противника", "Ходов нет", "Все в выигрышные"],
        answer: 1, explanation: "Есть ход в проигрышную соперника."
      },
      {
        id: "11-5", title: "Объём информации", type: "input",
        theory: "log₂16=4 бита на символ. 256×4=1024.",
        example: "16 символов → 4 бита.",
        question: "256 символов, алфавит 16. Сколько бит?",
        answer: "1024", explanation: "256×4=1024."
      },
      {
        id: "11-6", title: "Простые до 20", type: "code",
        theory: "Простое — делится только на 1 и себя.",
        example: "Проверяем делители от 2 до n-1.",
        hint: "for n in range(2, 21):\n    ok = True\n    for d in range(2, n):\n        if n % d == 0:\n            ok = False\n    if ok:\n        print(n)",
        question: "Выведи все простые числа от 2 до 20.",
        starter: "",
        expectedOutput: "2\n3\n5\n7\n11\n13\n17\n19",
        explanation: "Перебор с проверкой делителей."
      },
      {
        id: "11-7", title: "Маска /24", type: "quiz",
        theory: "255.255.255.0 = 24 единицы → /24.",
        example: "192.168.1.0/24",
        question: "Маска 255.255.255.0 = префикс:",
        options: ["/16", "/24", "/8", "/32"],
        answer: 1, explanation: "/24."
      },
      {
        id: "11-8", title: "Переобучение", type: "quiz",
        theory: "Overfitting — хорошо на обучении, плохо на новых данных.",
        example: "Заучила тесты, на новом варианте — провал.",
        question: "Переобучение — это:",
        options: ["Плохо на обучении", "Хорошо на обучении, плохо на новых", "Мало данных", "Простая модель"],
        answer: 1, explanation: "Плохое обобщение."
      },
      {
        id: "11-9", title: "НОД Евклид", type: "code",
        theory: "Пока b ≠ 0: a, b = b, a % b. Ответ — a.",
        example: "a,b=48,18 → ... → 6",
        hint: "a, b = 48, 18\nwhile b != 0:\n    a, b = b, a % b\nprint(a)",
        question: "Найди НОД(48, 18) и выведи.",
        starter: "",
        expectedOutput: "6",
        explanation: "Алгоритм Евклида."
      },
      {
        id: "11-10", title: "Асимметричное шифрование", type: "quiz",
        theory: "Открытый ключ — публичный, закрытый — секретный.",
        example: "RSA: шифруют открытым.",
        question: "Открытый ключ:",
        options: ["Секретный", "Можно распространять", "Только для расшифровки", "Одинаков у всех"],
        answer: 1, explanation: "Публичный."
      },
      {
        id: "11-11", title: "Сортировка списка", type: "code",
        theory: "Можно пузырьком или любым способом получить [1,2,3].",
        example: "if a[j] > a[j+1]: поменять",
        hint: "a = [3, 1, 2]\nfor i in range(len(a)):\n    for j in range(len(a)-1):\n        if a[j] > a[j+1]:\n            a[j], a[j+1] = a[j+1], a[j]\nprint(a)",
        question: "Отсортируй [3, 1, 2] по возрастанию и выведи.",
        starter: "a = [3, 1, 2]\n",
        expectedOutput: "[1, 2, 3]",
        explanation: "После сортировки [1, 2, 3]."
      },
      {
        id: "11-12", title: "Этика ИИ", type: "quiz",
        theory: "Важны прозрачность, справедливость, ответственность.",
        example: "Система найма не должна дискриминировать.",
        question: "Важный принцип ИИ:",
        options: ["Закрытость", "Прозрачность и справедливость", "Игнор предвзятости", "Только скорость"],
        answer: 1, explanation: "Fairness, transparency."
      }
    ],
    advanced: [
      {
        id: "11-a1", title: "Усложнённое: порядок сложностей", type: "quiz",
        theory: "n log n < n² < 2ⁿ < n!",
        example: "20! огромно по сравнению с 2²⁰.",
        question: "По возрастанию: O(n!), O(n²), O(2ⁿ), O(n log n)",
        options: [
          "O(n log n), O(n²), O(2ⁿ), O(n!)",
          "O(n²), O(n log n), O(2ⁿ), O(n!)",
          "O(n log n), O(2ⁿ), O(n²), O(n!)",
          "O(n!), O(2ⁿ), O(n²), O(n log n)"
        ],
        answer: 0, explanation: "n log n < n² < 2ⁿ < n!."
      },
      {
        id: "11-a2", title: "Усложнённое: Фибоначчи F15", type: "code",
        theory: "F15 = 610.",
        example: "Итеративно до 15-го.",
        hint: "a, b = 1, 1\nfor i in range(13):\n    a, b = b, a + b\nprint(b)",
        question: "Выведи 15-е число Фибоначчи (F1=1, F2=1).",
        starter: "",
        expectedOutput: "610",
        explanation: "F15 = 610."
      },
      {
        id: "11-a3", title: "Усложнённое: Дейкстра", type: "quiz",
        theory: "Дейкстра — кратчайшие пути, веса ≥ 0.",
        example: "Маршрут по карте.",
        question: "Алгоритм Дейкстры находит:",
        options: ["Макс. поток", "Кратчайшие пути (веса ≥ 0)", "Остовное дерево", "Эйлеров цикл"],
        answer: 1, explanation: "Кратчайшие пути."
      },
      {
        id: "11-a4", title: "Усложнённое: 2 в степени 10", type: "code",
        theory: "2ⁿ циклом: p=1; n раз p*=2.",
        example: "p=1\nfor _ in range(10):\n    p*=2",
        hint: "p = 1\nfor i in range(10):\n    p = p * 2\nprint(p)",
        question: "Вычисли 2¹⁰ и выведи.",
        starter: "",
        expectedOutput: "1024",
        explanation: "2¹⁰ = 1024."
      }
    ]
  }
};
