import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-primary">IRO Portal</div>
              <Badge variant="secondary">Образовательный портал</Badge>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#training" className="text-muted-foreground hover:text-primary transition-colors">Обучение</a>
              <a href="#events" className="text-muted-foreground hover:text-primary transition-colors">Мероприятия</a>
              <a href="#contests" className="text-muted-foreground hover:text-primary transition-colors">Конкурсы</a>
              <a href="#documents" className="text-muted-foreground hover:text-primary transition-colors">Документы</a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Icon name="LogIn" size={16} className="mr-2" />
                Вход
              </Button>
              <Button size="sm">
                <Icon name="UserPlus" size={16} className="mr-2" />
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Образовательный портал ИРО
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Современная платформа для профессионального развития педагогов. 
              Курсы, мероприятия, конкурсы и документооборот в одном месте.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                <Icon name="GraduationCap" size={20} className="mr-2" />
                Начать обучение
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <Icon name="Calendar" size={20} className="mr-2" />
                Посмотреть события
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">150+</div>
              <div className="text-muted-foreground">Курсов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">2,500+</div>
              <div className="text-muted-foreground">Участников</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">45</div>
              <div className="text-muted-foreground">Мероприятий</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">12</div>
              <div className="text-muted-foreground">Конкурсов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section id="training" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="training" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="training" className="flex items-center gap-2">
                <Icon name="GraduationCap" size={16} />
                Обучение
              </TabsTrigger>
              <TabsTrigger value="events" className="flex items-center gap-2">
                <Icon name="Calendar" size={16} />
                Мероприятия
              </TabsTrigger>
              <TabsTrigger value="contests" className="flex items-center gap-2">
                <Icon name="Trophy" size={16} />
                Конкурсы
              </TabsTrigger>
              <TabsTrigger value="documents" className="flex items-center gap-2">
                <Icon name="FileText" size={16} />
                Документы
              </TabsTrigger>
            </TabsList>

            <TabsContent value="training">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Icon name="BookOpen" size={20} className="text-blue-600" />
                      </div>
                      <Badge variant="outline">Онлайн</Badge>
                    </div>
                    <CardTitle>Цифровые технологии в образовании</CardTitle>
                    <CardDescription>72 часа • 15 модулей</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Современные методы использования цифровых инструментов в учебном процессе
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">₽3,500</span>
                      <Button size="sm">Записаться</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Icon name="Users" size={20} className="text-green-600" />
                      </div>
                      <Badge variant="outline">Очно</Badge>
                    </div>
                    <CardTitle>Инклюзивное образование</CardTitle>
                    <CardDescription>36 часов • 8 модулей</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Методики работы с детьми с особыми образовательными потребностями
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">₽2,800</span>
                      <Button size="sm">Записаться</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Icon name="Brain" size={20} className="text-purple-600" />
                      </div>
                      <Badge variant="outline">Смешанный</Badge>
                    </div>
                    <CardTitle>Психология развития</CardTitle>
                    <CardDescription>48 часов • 12 модулей</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Возрастная психология и особенности развития детей
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">₽4,200</span>
                      <Button size="sm">Записаться</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-3">
                          <Icon name="Calendar" size={20} />
                          Конференция "Образование будущего"
                        </CardTitle>
                        <CardDescription>25-26 сентября 2025 • Москва</CardDescription>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">Регистрация открыта</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Крупнейшее событие года в сфере образования. Ведущие эксперты, новые технологии, networking.
                    </p>
                    <div className="flex items-center gap-4">
                      <Button>Зарегистрироваться</Button>
                      <Button variant="outline">Подробнее</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-3">
                          <Icon name="Video" size={20} />
                          Вебинар: "ФГОС нового поколения"
                        </CardTitle>
                        <CardDescription>30 сентября 2025 • 14:00 МСК</CardDescription>
                      </div>
                      <Badge variant="secondary">Бесплатно</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Обзор изменений в образовательных стандартах и их практическое применение.
                    </p>
                    <div className="flex items-center gap-4">
                      <Button>Записаться</Button>
                      <Button variant="outline">В календарь</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="contests">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-yellow-500">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Trophy" size={24} className="text-yellow-600" />
                      <Badge className="bg-yellow-100 text-yellow-800">Активный</Badge>
                    </div>
                    <CardTitle>"Учитель года 2025"</CardTitle>
                    <CardDescription>Срок подачи заявок: до 15 октября</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Региональный конкурс профессионального мастерства педагогов
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Призовой фонд:</span>
                        <span className="font-medium">₽500,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Участников:</span>
                        <span className="font-medium">127 из 200</span>
                      </div>
                    </div>
                    <Button className="w-full">Подать заявку</Button>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Award" size={24} className="text-green-600" />
                      <Badge className="bg-green-100 text-green-800">Набор</Badge>
                    </div>
                    <CardTitle>"Цифровой педагог"</CardTitle>
                    <CardDescription>Срок подачи заявок: до 1 ноября</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Конкурс инновационных образовательных проектов
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Призовой фонд:</span>
                        <span className="font-medium">₽300,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Участников:</span>
                        <span className="font-medium">43 из 100</span>
                      </div>
                    </div>
                    <Button className="w-full">Подать заявку</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="documents">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="Search" size={20} />
                      Поиск документов
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4 mb-6">
                      <Input placeholder="Поиск по названию, номеру, содержанию..." className="flex-1" />
                      <Button>
                        <Icon name="Search" size={16} className="mr-2" />
                        Найти
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                        <Icon name="FileText" size={24} />
                        <span className="text-sm">Приказы</span>
                      </Button>
                      <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                        <Icon name="BookOpen" size={24} />
                        <span className="text-sm">Методички</span>
                      </Button>
                      <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                        <Icon name="FileBarChart" size={24} />
                        <span className="text-sm">Отчеты</span>
                      </Button>
                      <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                        <Icon name="Archive" size={24} />
                        <span className="text-sm">Архив</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Последние документы</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                          <Icon name="FileText" size={20} className="text-blue-600" />
                          <div className="flex-1">
                            <div className="font-medium text-sm">Приказ №247 от 15.09.2025</div>
                            <div className="text-xs text-muted-foreground">О проведении аттестации</div>
                          </div>
                          <Button size="sm" variant="ghost">
                            <Icon name="Download" size={16} />
                          </Button>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                          <Icon name="BookOpen" size={20} className="text-green-600" />
                          <div className="flex-1">
                            <div className="font-medium text-sm">Методические рекомендации</div>
                            <div className="text-xs text-muted-foreground">Цифровая грамотность</div>
                          </div>
                          <Button size="sm" variant="ghost">
                            <Icon name="Download" size={16} />
                          </Button>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                          <Icon name="FileBarChart" size={20} className="text-purple-600" />
                          <div className="flex-1">
                            <div className="font-medium text-sm">Отчет за 2024 год</div>
                            <div className="text-xs text-muted-foreground">Итоги работы</div>
                          </div>
                          <Button size="sm" variant="ghost">
                            <Icon name="Download" size={16} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Быстрые действия</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start">
                          <Icon name="Upload" size={16} className="mr-2" />
                          Загрузить документ
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Icon name="Plus" size={16} className="mr-2" />
                          Создать заявку
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Icon name="Calendar" size={16} className="mr-2" />
                          Запланировать подачу
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Icon name="Bell" size={16} className="mr-2" />
                          Уведомления
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">IRO Portal</h3>
              <p className="text-sm opacity-90">
                Современная образовательная платформа для профессионального развития педагогов
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#training" className="hover:opacity-100">Обучение</a></li>
                <li><a href="#events" className="hover:opacity-100">Мероприятия</a></li>
                <li><a href="#contests" className="hover:opacity-100">Конкурсы</a></li>
                <li><a href="#documents" className="hover:opacity-100">Документы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:opacity-100">Техподдержка</a></li>
                <li><a href="#" className="hover:opacity-100">Часто задаваемые вопросы</a></li>
                <li><a href="#" className="hover:opacity-100">Обратная связь</a></li>
                <li><a href="#" className="hover:opacity-100">Документация</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-90">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@iro23.ru
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Образцова, 1
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
            © 2025 IRO Portal. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;