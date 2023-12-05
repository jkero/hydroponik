Plan de culture
===============

.. uml::

    @startuml
    start
    split
        :piment-1;
        :basilic/laitue;
    split again
    :laitue (lufa);
        :piment-2;
        split again
        :tomate;
        :tomate;
        split again
        :kale;
        :persil;
        split again
        :tatsoï;
        :piment;
    @enduml

.. uml::

    @startuml
        title Saison 2
        skinparam cardBackgroundColor lightgreen
        interface H2O

        card laitue
        card kale
        card coriandre
        card basilic
        card bette_à_carde
        card chicorée
        card persil
        H2O -u[#00aaff]-> coriandre
        H2O -u[#00aaff]->laitue
        H2O -u[#00aaff]-> basilic
        H2O -d[#00aaff]-> bette_à_carde
        H2O -d[#00aaff]-> chicorée
        H2O -d[#00aaff]-> persil
        H2O -u[#00aaff]-> kale
       @enduml

@startuml
skinparam backgroundColor #ddFAF1
===B===  --> "laitue"
--> ===Ba===
===B=== --> "persil"
--> ===Ba===
===B=== --> "coriandre"
--> ===Ba===
===B=== --> "Bette à carde"
--> ===Ba===
===B=== --> "basilic"
--> ===Ba===
===B=== --> "kale"
--> ===Ba===
===B=== --> "chicorée"
--> ===Ba===

@enduml

@startuml

skinparam ActivityBarColor #blue
state fork_state <<fork>>
state fork_state2 <<fork>>
fork_state --> laitue
fork_state --> coriandre
coriandre --> fork_state2
laitue --> fork_state2
fork_state --> persil
persil --> fork_state2
fork_state --> basilic
basilic --> fork_state2
fork_state --> chicorée
chicorée --> fork_state2
fork_state --> bette
bette --> fork_state2
fork_state --> kale
kale --> fork_state2
@enduml

-------
Rappels
-------
    .. todolist::

...
