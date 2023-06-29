import Image from 'next/image'
import AboutImage from '@/public/images/pst.png'
import AboutLogo from '@/public/images/about-logo.png'

export default function AboutStory() {  
  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">Our Message and Belief</h3>
            <p className="text-lg text-gray-600 mb-8">
              We believe that there is only one gospel- the Grace of Christ (Galatians 1:6-9). In this gospel a righteousness from God is revealed, a righteousness that is a gift from God to man, independent of a man’s actions/works. Romans 1:16-17. The eternal gift of God’s righteousness apart from works.
              <br /> <br />
              We believe in the eternal nature of God's gift of righteousness and salvation to man; and that these gifts are irrevocable. We believe justification/salvation by faith in Christ alone apart from works is the foundational truth and the core message of the Bible on and around which other truths and teachings of the Bible should be uncompromisingly built for the spiritual growth and fruitfulness of the believer. Ephesians 2:8-10.
            </p>
            <p className="text-lg text-gray-600 mb-8">
               We are committed to building believers who will be strong and sound in the doctrine of Christ, seasoned in the things of the Spirit and also flow in them adequately. We are committed to raising and training disciples for the undiluted Gospel of the grace of Christ. We are committed to spreading the gospel of the grace of Christ till the whole world knows that eternal life and righteousness are actually eternal gifts of God that are irrevocable.
            </p>
          </div>

          <div className="sm:flex">
            <figure className="flex shrink-0 max-w-none sm:max-w-xs lg:max-w-none mb-8 sm:mb-0">
              <Image className="grow self-start rounded" src={AboutImage} width={435} height={326} alt="About us 02" />
            </figure>
            <div className="sm:ml-8 lg:ml-16">
              <h4 className="h4 mb-2">Our Leaders - Pastor&Dr.(Mrs)Ademiluka</h4>
              <p className="text-lg text-gray-600 mb-8">
               Pastor Olayinka is a seasoned teacher and preacher of the gospel. He has a special passion and desire to see people's eyes opened to the true nature of God through the precise interpetation of the scripture, and the demonstration of God's love through healings and miracles by Holy Spirit.  
              </p>
              <div className="flex  mb-8">
                <Image className="rounded-full self-start shrink-0 shadow-lg mr-4" src={AboutLogo} width={40} height={40} alt="Logo" />
                <div>
                  <blockquote className="text-gray-600 italic">
                    "For many years, I was plagued by the fear of eternity. I was told Jesus loved me, but I could not understand how he would make a place as beautiful as heaven, and make it very difficult for anyone to enter. This fear plagued me for many years until I came to the understanding of God's gift of righteouness. After God opened my eyes to the purity of the gosepl, it became my biggest desire to proclaim to everyone the same truths: that righteouness is a gift that we receive from God independendent of our works" 
                  </blockquote>
                  <div className="text-sm font-medium text-gray-600 mt-2">
                    <cite className="text-gray-900 not-italic">Pastor Olayinka </cite> · <a className="text-blue-600" href="#0">Senior Pastor</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
             As a pastor, he received the mandate from God to raise generals for him. Men and who women with intimate relationship with the Holy Spirit, who are sound in their understanding of the scriptures, solid in character, and able to demonstrate the love of God to the world through signs and wonders by the Holy Spirit.  Together with his wife, Dr Esther Ademiluka, they continue in this mandate by training and raising disciples accross different nations.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}