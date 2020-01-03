Right now the id is overriding the class for all of the rest of the hearts. That means that the animation delay is working on only one thing?

The ::before and after are matching with the first heart. However, the whole animation is being delayed. The rotation is being delayed on all of them, it's just that the color is being delayed on just some of them. How could the rotation be being delayed on all of them, but the colors on just some? Are not the rotation and the colors coupled? I think they are in one animation, but not the other...?

When I change the colors of heartmove1 all to blue, now all the original heart divs are matching (not before and after). I guess this means it's probabaly the originals that were matching in the first place? Because I didn't change the originals.

Yes, I thought the originals were not matching, but that's because I forgot about the delay.

Now I see the originals are matching, it is the ::before and afters that are not experiencing the delay, but only in color. The rotation of ::before and after might be taken care of by the 'heartmove' animation, but the 'heartmove1' animation takes care of the color of these. This animation needs to be delayed accordingly for each of the 25 ids. I think right now it's not being delayed at all. So maybe the second animation needs to be assigned individually to each of the 25 ids?

No, the colors of the original 'heart' divs are not all acting the same color at the same time. They are being delayed as well. Why are they not delaying at the same pace at the colors of before and after??????

I think the answer lies in the difference between the .heart class and the 25 #heart0 id's. 

Having an id is what messes it up. The first heart doesn't have an id, and it works fine. That means that supposedly the animation-duration is fucking it up? Maybe if the divs were separated instead of using ::before and after they would work.

The animation 'heartmove' is controlling the movement of all divs. The animation 'heartmove1' is controlling just the animation of the ::before and after. Maybe the fact that using an 'id' to create an animation-delay is what is making it only possible for the animation that is controling movement to be delayed, and the ret of the animations are not being delayed. However, if the rest of the animations were not being delayed, that would mean that the before and after hears were always the same color, which actually it seems like they ARE!!! 

So apparantly using animation-delay in the id is delaying only the first animation? 
Using this code makes the colors synchronize, but the before and after divs are now really far  away from the heart div:
    #heart0 {
      left: 150px;
      animation-delay: 0.3s;
    }
    #heart0::before {
      left: 150px;
      animation-delay: 0.3s;
    }
    #heart0::after {
      left: 150px;
      animation-delay: 0.3s;
    }

SOLVED!!!!!!!!!! Removing left:150px from before and after solves problem!!!! :))))))))
